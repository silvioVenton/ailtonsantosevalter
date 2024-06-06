export default function questao(){
    fetch('http://localhost:3000/api/questao/200')
    .then(resp => resp.json())
    .then(json => console.log(json))
    return(
        <div>
            <h3>QUESTÃO</h3>
        </div>
    )
}