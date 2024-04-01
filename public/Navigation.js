"use client"
import Link from "next/link";
import Image from "next/image";
import Logo from './logo.png'
import profileicon from './profileicon.png'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';;
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';



const Navigation = () => {
    return (


        <nav>
            <Image src={Logo} width={475} />

            <div className="navlinks">
                <Link className="navlinkitem" href={'/'}> Home  </Link>
                <Link className="navlinkitem" href={'/upload'}>  Upload  </Link>
                <Link className="navlinkitem" href={'/records'}> Records  </Link>
                <Link className="navlinkitem" href={'/about'}> About  </Link>

            </div>


            <Image src={profileicon} width={50} />





        </nav>




    );
}

export default Navigation;

