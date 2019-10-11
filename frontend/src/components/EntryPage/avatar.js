import React,{Component} from 'react';
import '../../App.css';


class Avatar extends Component{
    constructor(props){
        super(props);
        this.state={
            avatarNumber: 1,
        
        };
    }
avatarNumber=e=>{
   
 
      this.props.ava(e.target.value)

}
    render(){
     
    
        return(
            <div className="inner-container text-center">
                <div className="avatar-grid">
     
                <label>
                 <input type="radio" name="avatar" value="1" onChange={this.avatarNumber} defaultChecked/>
                     <img src="https://lh3.googleusercontent.com/Pu2KpvB8o73tVbLLW5Gv0td67VtaeIhIk9l9WlM6fcqUPDqTGiL-H0GrEcyx46wXMwaPT89Y_yMZn7GY05APRDoxob31loSWUG-CDbwQJr-_-Ow8XAvofXvN8WgNiZ4JRyut-HRn5v8QiEwchYAvycF-OUg2R3X7nKM9kuuJ8REE416RxpguSdLzEkKFFz-UO6pbUAfSboEY1sZS9iwW8hu6IgSLHT7LehU9KdNDWn3XFQnU-XU957TbAYrpBRN8-Kp_eGLbtFIOUNZu8mh3Pmehu0uOZK51z8Qkqj9mQvv8hkXDXt2pAqPTYtM1pqWmWi32rKQ9P85YHQfdm3D47PfQOOSod1zSc_NFLkwcn4dwSZ7_sZj-fUmsV7Oi4mQXU1OYCO_63HcAI87qTC7ENooicr0ac109j6_t0f8wOv17i7BrnK0reZhsQ1Q2S-9MpLF40_GO2UnyXLHLxbaqgDBygJ8y2-fIFnVgk3FRhyFPPVFtacX_LThOMJLHFiftvzjUZir1Mt_oj88bwfBE9z2CEkEEqBMWSwvbmW8DnrJprOeUm3OiDpML4648VuGWwxZ922ycESF_LnXd2J0DMEy8sqSCHREEcZLFLRfBdsdZcxMD4tkrVM8yshh7X2LwwkISRPprLC5R5F3_1fFc8hrNnIqCRVbRjIF3KEH1FRK42Mxi8I2aGA=s100-no" alt="avatar01"/>
                </label>
                <label>
                  <input type="radio" name="avatar" value="2" onChange={this.avatarNumber}   />
                  <img src="https://lh3.googleusercontent.com/JxixoS96_PmtmbM7hXu_Hf6XEC7ea9ogvbyIdDfD376UcmMLIwlDS802o87bJQfEAGL8wHcSlqAkhaOZ41oq5wiqhqtzHPxT3uCC8FrD7_dTCB5a-dlh26neXGo1VYwuS-H-EBNNBi6HS4iBXhUIZVPDiYL5WqYRSNbrT_CbZ5Hw-Pr9DUL7Wp8UJG46F2d7x7_4y5PKYUsPt6Q1cwKSWx9A63hk04nhGLMu4qajzn8iYrVf3PqSQLfrG8Tl0b8tU67ZLOvzOomxnvh96o3eBxAuK4D5nHeeGnfYHV5xeXvS6lsixkFRe8mwHj7bEeMTpV06_jWbV8UZXkBu8SsssZQNHloHlMaA972g0Rn8FsUMKjHZof2BL9GsKveG26uHQbgcH1gjaAV22mg8ZVGcBAeojGScH9Fk2YM4sOoyALvhGUb_Q_XnhkA6MggRsGC3UDxTAJtLlYxhs-Ag1r6gA5Yt0u2SlvTt1tRRLzTZHvF4UKjaxzffkSNDb9uQHfLDqtNXfOID6x6V1HMvlRJ7GQNhtv57HeetLAjmm4RAgA7l1aVVfoumVTRTTRzGJ4jPFtkff4I-6RbZbMTVFe3ngjT5J-3ftvsWOZZUQcngPaqcfbPEc4FVUsOW7N6WRYfMXg6opTpq4HJygur7OdO1RZ-7PuHXc_ThLG0h_jlPs8AxHu9vd6NWGl1QXrMIfOcpvA2NRND1dZ16zeULlXymmbLcwgRJTzH8-BmPmG5hi9Hsuz0=s100-no" alt="avatar02"/>
                </label>
                <label>
                  <input type="radio" name="avatar" value="3" onChange={this.avatarNumber}  />
                  <img src="https://lh3.googleusercontent.com/epFWvrP8-rnYemIwz2-3RB8MdnSRN3QCESJ-opactjJojZRiHfT79dX6E4bZI7jigfFPnYp9vTMIwrxlLkdfmE99MOa6iLJxHSU6HNUghzv4kj_3Hrf_-a8DSiC0aSa07cKWW-foo-i9qTtVn8LP_38Op1WbNOuoxNY31Wkho05nzH8ZVQWcPGNb1zpRQyhdc1R4d4YDMIfN20ucheb1ypQNZOi2xscp8tNd2u4Z2fwXGX4Ba2jtlvY8AWAcr6WfKZk-NmBo8QTtDb4rRI7wykABIQZRET9E7kCuuZnKwH5-qKOrm6cWv9dKyNM9wzZHp3vOd1AiIemDIHKiaDu4dj3cwGTZKU6KX3AGeSQdo8x31slHb2oOusjgF-zmZILQcmCKpu0GLG0R1v7F8vqHCKJTAMEDLFcEEOVMVSgrSbR_ciZ7_8AK_n6eQv-MJ9neAhs0qirmRfqEhP4_5yYlZHmk17cuG-0pVEYsotB4btJJRm69qg1Ad0cTNhRlvEahWWdAqORk8N9CFqUFV6jy3D32fRdXeKqanmmip2RcUClLNCynjZ-Mj9to9a5XHLp06spo-hW7HLoOfKdi8LJNoldu3_Yu62yCsO7-m5S8AEVrfl1jeBT9lwRDuWeBVOrYYPQB4EsxDPjiV5bmWTDaXu3re5Erkfn7U2O8ps2Li-oe2wKF6BmVeOsTRoGkDKA8a5cmHSNTrleRbBwjKHaV8PIHdx8XIEdu6QKCvqDpy-wJzuw=s100-no" alt="avatar03"/>
                </label>
                <label>
                  <input type="radio" name="avatar" value="4" onChange={this.avatarNumber}   />
                  <img src="https://lh3.googleusercontent.com/-8uLRrBGRR6XyXyN_8SOJHhd2f68pC0BW8j8wld7dPKGGxkdkzKouwLczoBuPE7NbNN7HFiTIUpvPSWCR3Ed8YkX4IRvJlSSHB1QhYupwA5FWQBlR6klyRp0dTu7zfkxfBFM8-WpAhu64eTi4l4LIpVlPlR3g7FYz2w0CR7oVYD0j5-Yb9bYBMuoCc1e_WnPNcjokZmQemIdylr6Wy2Fa6NCD07y0KbbwY9O1YWUmnDlQthbtr9QN4y9SYBG3bHuVklXITPyh5Il4ITgzyD93xh2P6uMn_d0dgx2TlnFksuaXojMyvZ6l-GO7z7L-I93an8XpBCU0OYFMnM9CdzpkK2J9pCBk4KymZu0gZg-DxqFcsTY_ioL_9j3y6shrHy5bgUxMLc4PeXqzjksbom37iOeV2ED-TsbaxJKByNODv2MaU0VcVxkT68_8tuR5B_Of9ZtyQjb8Vgp-kGPFgacIMoCqkiHh80Hn6C2EXzxZ6-b3IfUmfjn69zCJKCsuNaeUBQ_c_9rrxtYcEPlyF-qsPWNFjU1sJsJ5b7p8qpGLTQIOhHS1tpHsos3GXcNn_XtOpl5OKCASg0pppU9nkEcmJzT-wthKXhzstyyPvybzLTLmFravOcH-YDFVd4M20rCzzXi9zqKKlJUecrhbvYr_1hdX8UVxn-Bka3FUPcoJpHjwzlaP69mBVXn_uSEbEQTUJUGt0asOGl-RL9RDKRgq-oLEpMTm_ZXM-5k40soYgrlDoE=s100-no" alt="avatar04"/>
                </label>
                <label>
                  <input type="radio" name="avatar"  value="5" onChange={this.avatarNumber}  />
                  <img src="https://lh3.googleusercontent.com/9gWGytlCnY8FL59eVCyhZNZb_u3AVxY73pd5C060HFxdvi28abJE9YOpzqKhXpkSg9uyIFlPZm2LTREyWLUbwr9X8g4oI_Fe8fUggVC0FgBwMeiKH_bW1t7HnPUnoNAYGslCNSB07a4FLhFn-02tw3ZcuXvD0Ny3top_8wKV5a21KXKTKiAKpjkQIacNN2TYi0Fc6IV9I0tOgtXAqR8lBRl9RItBrqM_HUIimoE77qxmo6oi0OwcNgkNmiVc55V0igy1VUHysq3T4qEu1psgKp762o91OC1PEsYmB3v6PWXQaPRwSCgHjtl9WkARzSsg3bnNGMuxs4LscRka1643vMaoqjWk8u3NxCWvq67rri9u92fJmyOBSWln3WLj_Z7T03oUBUbDoXJUvYgaz6FEYOtGYAEk6YIzCM45S1idgLwusqn8yD_CK9LplMQk-PXg5LdBj6iA5y94PvkXpipnyAtO_M_Z6CEmuvIjTqC9lWYgKEMg6l_0Yju3RG2fwH-ImcovhRtqFFUIpHNOWsiys6wxmnD9z4WSiyvqaymWOplYTTHsnxpOcE6o1H4k3UK6OUdbJPZanI-HpoAoFw8fzE4NF2zg6UEDbHffaCgxBW6jLCMxFq_kxIw-SLNYYQV29EVhY6iodQDA2WySUNSsbK-isrzOBbWyp7uTUTK-KaBe89w35XPAEI6on15oWkDNygAR18leDvzflIVDdwJMj-BmUzFoDBnP_91NrDTAvbOCP_4=s100-no" alt="avatar05"/>
                </label>
                <label>
                  <input type="radio" name="avatar" value="6" onChange={this.avatarNumber}  />
                  <img src="https://lh3.googleusercontent.com/exzqE5ecQHqhpNtSP1mCpi51Qv383AZMVX18I1MXovWm4UimWc8oIWaBW7suD9J26RH0uGwhW743SrsRUlq2xty1IrpVitWZ55ARNFwYDX41jgzGopAsNIAP8SCU8c1jEpfVKOQE7SZC_XTxCIWBD0aJOiPJt5A89eA3JOkuc0KRpr7ebMeZF72ERFCu4KwTD3glTFKiNegLOhrVEgm5rzSAKGih349PukjkKCnUrsjyr4xkSGvdLAJCSvTQ-GP18CpyIF_UTVHWH89j4j7RMaiv4wQSDLRpvDNoNDNONKJ4_5oGdVWZIr_1A_W5ONgJLSaLi81pyEJf9anYKooJ1kwGBftTkcuzicawbAD2B7JN9xd6Cl1AGu5RuuuNkLc1IiVJdClBJAcF3ImfPYMLLXan1TBk7K44EKWHqF95RV-qGaz_eIaBNHSUvIOBheC-VRlckJgiM4KtCnymJYByhQRmbZ1mlAnutEUVOxPT59T6id_iuF1ejXBUlLPisdb2xBY9g-VztyCUP1zPxb1XqCq2MSv1DisO6kzNvXuA9hf5C9v7K2seMWBjyPoeiPpUSytslccxgGxxtQhXqieUvp5gqDCX6FIjaZJ3K0XbWmrSQxifYo7ZZbqMUA13gEIWNpGmMYKZe89r4lK1IRV0A4xWYhet25oWcYjkPbloHe5k5Bq0cSjPKtOyIKOwBewT9njcbkX6LLL3PigvxsjYsoTA7wL0U7CPSH01XcicIXRfZU4=s100-no" alt="avatar06"/>
                </label>
             
            
                                                            
                    {/* <img className="avatar-image" src="https://cdna.artstation.com/p/assets/images/images/006/102/672/large/brice-laville-saint-martin-neytiri-01.jpg?1496079157" alt="avatar01"/>
                    <img className="avatar-image" src="https://cdna.artstation.com/p/assets/images/images/006/102/672/large/brice-laville-saint-martin-neytiri-01.jpg?1496079157" alt="avatar01"/>
                    <img className="avatar-image" src="https://cdna.artstation.com/p/assets/images/images/006/102/672/large/brice-laville-saint-martin-neytiri-01.jpg?1496079157" alt="avatar01"/>
                    <img className="avatar-image" src="https://cdna.artstation.com/p/assets/images/images/006/102/672/large/brice-laville-saint-martin-neytiri-01.jpg?1496079157" alt="avatar01"/>
                    <img className="avatar-image" src="https://cdna.artstation.com/p/assets/images/images/006/102/672/large/brice-laville-saint-martin-neytiri-01.jpg?1496079157" alt="avatar01"/>
                    <img className="avatar-image" src="https://cdna.artstation.com/p/assets/images/images/006/102/672/large/brice-laville-saint-martin-neytiri-01.jpg?1496079157" alt="avatar01"/> */}
                </div>
            </div>


        );
    }
}


export default Avatar;