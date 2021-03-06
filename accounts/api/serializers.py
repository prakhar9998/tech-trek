from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.tokens import RefreshToken
from accounts.models import Player

class PlayerRegisterSerializer(serializers.ModelSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    username = serializers.SlugField(
        min_length=4,
        max_length=32,
        help_text='Username should be 4-32 characters long including only letters, numbers, hyphen or underscore only',
        validators=[UniqueValidator(
            queryset=Player.objects.all(),
            message='This username has already been taken!'
        )]
    )
    password = serializers.CharField(
        min_length=6,
        max_length=32,
        write_only=True,
        help_text='Password should be 6-32 characters long.',
        required=True
    )
    password2 = serializers.CharField(
        min_length=6,
        max_length=32,
        write_only=True,
        help_text='Password should be 6-32 characters long.',
        required=True
    )
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(
            queryset=Player.objects.all(),
            message='This email has already been registered!'
        )]
    )

    avatar_no = serializers.IntegerField(default=1)

    def validate_avatar_no(self, value):
        """
        Check that the avatar no. is among the available avatars.
        """
        if value > 6:
            raise serializers.ValidationError("The avatar specified is not avaliable.")
        return value

    def get_token(self, obj):
        refresh = RefreshToken.for_user(obj)

        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }

    class Meta:
        model = Player
        fields = [
            'username',
            'email',
            'password',
            'password2',
            'token',
            'avatar_no',
            'contact_no',
            'admission_no',
        ]

    def create(self, validated_data):
        username = validated_data['username']
        email = validated_data['email']
        password = validated_data['password']
        password2 = validated_data.pop('password2', None)
        avatar_no = validated_data['avatar_no']
        contact_no = validated_data['contact_no']
        admission_no = validated_data['admission_no']
        if password != password2:
            raise serializers.ValidationError("Passwords didn't match.")
        
        user = Player(
            username=username,
            email=email,
            avatar_no=avatar_no,
            contact_no=contact_no,
            admission_no=admission_no
        )
        user.set_password(password)
        user.save()

        return user

class PlayerDashboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = [
            'username',
            'is_paid',
            'current_question',
            'score',
            'avatar_no',
        ]

class PlayerListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = [
            'username',
            'email',
            'is_paid',
            'last_solved',
            'current_question',
        ]
