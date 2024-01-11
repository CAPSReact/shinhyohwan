import Welcome from "../components/Welcome";
import "../styles/style.css"; 

export default function Home(){
    return (
    <div className="wrapper">
        <Welcome name = "신효환"/>
    </div>
    );
}