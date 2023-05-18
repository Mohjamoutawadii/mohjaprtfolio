import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


function Footer() {
    return (
        <div className="container-fluid footer pt-3 mt-5 fixed-bottom" style={{ backgroundColor: '#7b7be1' }}>
            <div className="p-row">
                <div className="p-col-12 text-center justify-content-center">
                    <div style={{ marginBottom: '20px' }}>
                        <a href="https://www.facebook.com/mohja.moutawadii.3" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FacebookIcon style={{ color: 'white', fontSize: '24px', marginRight: '8px' }} />
                        </a>
                        <a href="https://www.linkedin.com/in/mohja-moutawadii-525ba0221/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <LinkedInIcon style={{ color: 'white', fontSize: '24px', marginRight: '8px' }} />
                        </a>
                        <a href="https://github.com/Mohjamoutawadii?tab=repositories" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <GitHubIcon style={{ color: 'white', fontSize: '24px' }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
