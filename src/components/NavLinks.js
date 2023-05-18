import React from "react";
import { MegaMenu } from 'primereact/megamenu';
import '../Css/megamenu.css';

function NavLinks() {
    const centerItems = {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#2a4696',

    };


    const items = [
        {
            label: 'Home', icon: 'pi pi-fw pi-home', command: () => {
                window.location.href = 'home';
            }
        },
        {
            label: 'competences', icon: 'pi pi-fw pi-star', command: () => {
                window.location.href = 'experiences';
            }
        },
        {
            label: 'Projets', icon: 'pi pi-fw pi-bars', command: () => {
                window.location.href = 'projets';
            }
        },
        {
            label: 'Certificats', icon: 'pi pi-fw pi-file', command: () => {
                window.location.href = 'certificats';
            }
        }
    ];

    const menuClass = '';

    return (
        <div columns={{ xs: 1, sm: 2, md: 3 }} className="p-fluid fixed-top">
            <div className="p-row justify-content-center ">
                <div className=" p-col  ">
                    <div className={menuClass} >
                        <MegaMenu model={items} style={centerItems} breakpoint="960px" />
                    </div>

                </div>
            </div>

        </div>
    )


}
export default NavLinks;