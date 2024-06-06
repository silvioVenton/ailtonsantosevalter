import Contador from "@/component/contador"
import Image from "next/image";
import style from "@/styles/Home.module.css"
export default function ContadorFacebook(valor){
    return(
        <>
        <div style={{ display:"flex",alignItens:"center",  borderRadius:"3vh", justifyItens:"center"}}>
            <div style={{width:"100%", display:"flex"}}>
            <div>
            <Image
                src="/facebook-color.png"
                width={80}
                height={80}
                alt="youtube"
            />
            </div>
            <div>
            <div  style={{display:"flex", justifyContent:"center"}}>
                    <span style={{color:"#fff", fontFamily:"Montserrat,sansSerif", fontWeight: "900", fontSize:"30px"}}><Contador valor = "1300" /></span>
                </div>
                <div style={{marginLeft:"1rem"}}>
                    <span style={{color:"#fff", fontFamily:"roboto", fontWeight: "900", fontSize:"25px"}}>Seguidores</span>
                </div>
                
            </div>
            </div>
        </div>
        </>
    )
}