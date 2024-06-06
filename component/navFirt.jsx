import styles from "@/styles/Home.module.css"
export default function NavFirst(){
    return(
        <div className={styles.navbar}>
            <div>
                <h3 style={{color:"#634b03", fontFamily:"roboto", fontWeight:"500"}}>MInisterio Assembleia de Deus</h3>
            </div>
            <div style={{display:"flex", justifyContent:"flex-end", position:"relative", color:"#fff", fontFamily:"roboto", fontWeight:"500"}}>
                <img style={{width:"30px",margin:"1rem"}} src="/facebookbr.png" alt="facebook" />
                <img style={{width:"30px",margin:"1rem"}} src="/inst.png" alt="Instagram" />
                <img style={{width:"30px",margin:"1rem"}} src="/logoYouBr.png" alt="Instagram" />
               
            </div>


        </div>
    )
}