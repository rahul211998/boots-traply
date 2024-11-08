import React from 'react'
import  tss  from "./tss.css";
import { FaFacebookF,FaTwitter,FaCalculator,FaChevronLeft,FaChevronUp,FaChevronRight} from "react-icons/fa";
import { IoLogoInstagram, IoManSharp } from "react-icons/io5";
import { TiSocialLinkedin } from "react-icons/ti";
import { MdCleanHands,MdCleaningServices,MdPhoneInTalk,MdVerified,MdOutlineDryCleaning,
  MdOutlineWindPower,MdEmojiEmotions} from "react-icons/md";
import { GiVacuumCleaner } from "react-icons/gi";
import { SiCcleaner } from "react-icons/si";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { RxBorderDotted } from "react-icons/rx";
import { PiPlayPauseFill } from "react-icons/pi";

const Apage2 = () => {
      const urlImage = 'https://img.freepik.com/premium-photo/woman-cleaner-portrait-uniform-office-home-cleaning-services-concept-bright-blue-background_210545-3113.jpg'
    const imgYello = "https://img.freepik.com/free-photo/portrait-modern-man-cleaning-doing-household-chores_23-2151468729.jpg"
    const imgblue = "https://t3.ftcdn.net/jpg/10/29/70/50/360_F_1029705054_1iLT0QCPovLj3sF3TmFepede57Wy7Uce.jpg"
  return (
    <div className='mainOne'>
          <div className="App">
            <section className="text-start text-white my-calss" style={{
  backgroundImage: `url(${urlImage})`, 
  backgroundSize: 'cover', 
  padding: '50px', 
  position: "relative"
}}>

<div
  className="container-fluid py-2"
  style={{
    maxWidth: "1200px",
    margin: "0 auto"
  }}
>
  <div className="row align-items-center header">
    <div className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0 headerNumsMail">
      <i className="fas fa-phone"></i> +123-456-7890 &nbsp;
      <i className="fas fa-envelope"></i>info@yourdomain.com
    </div>

    <div className="col-12 col-md-6 text-center text-md-end">
      <div className="d-inline-flex align-items-center gap-3">
        <FaFacebookF />
        <FaTwitter />
        <IoLogoInstagram />
        <TiSocialLinkedin />
        <button className="border-0 p-1 bg-info text-white rounded ms-3 text-center">
        <FaCalculator/>  GET A QUOTE
        </button>
      </div>
    </div>
  </div>
</div>

<div className='navDiv'
  style={{
    width: "100%",
    maxWidth: "1300px",
    padding: "10px 0",
    margin: "0 auto"
  }}
>
  <div className="container-fluid navHeader">
    <div className="row align-items-center">
      <div className="col-12 col-md-auto text-center text-md-start">
        <a className="navbar-brand" href="#">
          <img style={{mixBlendMode:"darken"}}
            className="igs"
            src="https://avatars.githubusercontent.com/u/87556194?s=280&v=4"
            alt="Logo"
            height="80"
          />
        </a>
      </div>

      <div className="col-12 col-md d-flex justify-content-center justify-content-md-end mt-2 mt-md-0">
        <ul className="d-flex flex-wrap list-unstyled gap-4 m-0 text-body">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pages
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>


  <div className="text-first text-start mt-5 bg-mobile-dark" style={{ position: 'relative',width:"fit-content",
    left:"60px",
  }}>
    <p className='col-12'>RENEW YOUR LOOK</p>
    <h1 className='col-12'>A Tradition of</h1>
    <div>
      <FaChevronLeft className='sideLeft' style={{position:"absolute",left:"-100px",width:"100px",height:"40px"}}/>
      <h1>Quality Cleaning</h1>
    </div>
    <button className="btn btn-outline-light mt-3">Contact Us</button>
  </div>

</section>

      <section className="py-1 bg-info second-part">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4">
              <div className="card p-4 border-0">
                <i className="fas fa-broom fa-2x mb-3"></i>
                <h5><MdCleanHands className='text-info' style={{width:"100px",height:"40px"}}/><br />Professional Cleaning</h5>
                <p>Housekeeping is responsible for minor security in hotel Ecosystem for Food and Cleaner through.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 border-0">
                <i className="fas fa-rocket fa-2x mb-3"></i>
                <h5><MdCleaningServices className='text-info' style={{width:"100px",height:"40px"}}/><br />Fast and Efficient</h5>
                <p>Our Aim is to Keep the House Clean - Your Aim Will Help through Digital Innovation World Summit.</p>
              </div>
              
            </div>
            <div className="col-md-4">
              <div className="card p-4 border-0">
                <i className="fas fa-paint-brush fa-2x mb-3"></i>
                <h5><GiVacuumCleaner className='text-info' style={{width:"100px",height:"40px"}}/><br />Renew Your Look</h5>
                <p>Both of us take a lot of time in getting cleaned and beautiful Clean Home. Professional Service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-info text-white py-5">
        <div className="container text-center">
          <div className="row">
            <div className = "col-md-4">
            <h2 className='text-black text-start'>A Clean House is a</h2>
            <h2 className='text-black text-start'>Happy Place</h2>
            <p className='text-start'>Washla has met the demands of a growing world.</p>
            </div>
            <div className="col-md-4 text-start">
              <p><h3 className = "d-inline">W</h3>ashla customers has a tremendous opportunity to answer the call of logistic needs across the globe. Has 26 affiliated state soybean associations representing 30 soybean-producing state.</p>
            </div>
            <div className="col-md-4 text-start">
              <p>World’s leading non-asset-based supply chain management companies. We design and implement industry-leading. We specialise in intelligent & effective search and believes in the power of partnerships to grow business.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
        <div className="d-flex justify-content-center vh-10">
  <div className="header-div text-center py-4">
    <header className="px-4 py-1">
      <p className="text-muted">WHY CHOOSE US</p>
      <h2>Tradition of Trust</h2>
      <p className="text-muted">
        We specialize in intelligent & efficient search and believe in the power <br /> of partnership to grow business.
      </p>
    </header>
  </div>
</div>
<div>
    <main>
        <div className='d-flex justify-content-around'>
        <section className="text-center">
  <div className="circlesection d-flex align-items-center justify-content-center rounded-circle shadow-lg bg-white mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
    <IoManSharp className='text-info' style={{width:"100px",height:"40px"}}/>
  </div>
  <img src="" alt="" />
  <br />
  <h4>Professional Team</h4>
  <p>Our team uses sanitizing solutions to <br /> wipe down light switches and doorknobs.</p>
</section>

<section className="text-center">
  <div className="circlesection d-flex align-items-center justify-content-center rounded-circle shadow-lg bg-white mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
    <MdPhoneInTalk className='text-info' style={{width:"100px",height:"40px"}}/>
  </div>
  <img src="" alt="" />
  <br />

  <h4>24/7 Services</h4>
  <p>Our team uses sanitizing solutions to <br /> know in advance in points.</p>
</section>

<section className="text-center">
  <div className="circlesection d-flex align-items-center justify-content-center rounded-circle shadow-lg bg-white mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
    <MdVerified className='text-info' style={{width:"100px",height:"40px"}}/>
  </div>
  <img src="" alt="" />
  <br />

  <h4>Service Guarantee</h4>
  <p>We tell our team members to <br /> switch out all cleaning cloths and <br /> mop heads.</p>
</section>

    </div>
    <br />
    <br />
    <br />
    <div className="container-fluid position-relative d-flex">

  <div className="position-absolute start-0 top-0 h-100 photomale" style={{ zIndex: -1, width: '50vw', overflow: 'hidden' }}>
    <img src={imgYello} alt="Background Image" className="img-fluid h-100 w-100" style={{ objectFit: 'cover'
    }} />
  </div>


  <div className="ms-auto p-4 bg-white shadow-lg border position-relative" 
       style={{ zIndex: 2, width: '55vw', minHeight: '70vh', marginBottom: '-10vh',marginTop:'50px'}}>

    <section className="mb-5">
      <p className="text-muted text-start">MAID FOR YOU</p>
      <h2 className="text-start">A Cleaner Place is a Safer Place</h2>
      <p className="text-muted text-start">
        We specialize in cleaning services and are dedicated to giving our customers the time they deserve to enjoy the things they love.
      </p>
    </section>


    <section className="d-flex justify-content-around flex-wrap">
      <div className="text-center p-3">
        <SiCcleaner className='text-info' style={{width:"100px",height:"40px"}}/>
        <h4>Professional Cleaning</h4>
        <p>Housekeeping is responsible for minor <br /> security in hotels.</p>
      </div>
      <div className="text-center p-3">
      <MdCleaningServices className='text-info' style={{width:"100px",height:"40px"}}/>
        <h4>Fast & Efficient</h4>
        <p>Both take a lot of time for <br /> security in hotels.</p>
      </div>
    </section>
  </div>
</div>
    </main>
  </div>
  <div>
    <div>
        <div style={{ position : "relative"}} width = "100%" height="100vh">
            <img src={imgblue} 
            alt="imgs" width = "100%" height="100%" style={{objectFit : "cover",
                filter: "brightness(0.9)",
             position : "absolute",zIndex:"-1"}}/>
             <br />
             <br />
             <br />
             <br />
             <br />

             <div className='text-center'>
             <p className='text-white'>WHY CHOOSE US</p>
            <h2>Our Great Servise</h2>
            <p className='text-white'>Restorying the freshness of all your upholsted fabric and take <br /> 
            the workout of house workout for you</p>
             </div>

            <div className='d-flex justify-content-around'>
                <section className='bg-info p-4 opacity-75 text-white shadow-lg'>
                    <MdOutlineDryCleaning style={{width:"100px",height:"70px"}}/>
                    <h4>Home Cleaning</h4>
                    <p className='text-white'>Homes and throughlylaunder them <br />
                    between usege,we give our terms the <br />
                    accusantium doloremq laudantium</p>
                </section>
                <section className='bg-info p-4 opacity-75 text-white shadow-lg'>
                <MdOutlineWindPower style={{width:"100px",height:"70px"}}/>
                    <h4>Windows Cleaning</h4>
                    <p className='text-white'>We are closely monitoring national,state<br />
                    local health aggiencies for the most <br />
                    recent development</p>
                </section>
                <section className='bg-info p-4 opacity-75 text-white shadow-lg'>
                <HiMiniBuildingOffice style={{width:"100px",height:"70px"}}/>
                    <h4>Office Cleaning</h4>
                    <p className='text-white'>Follow these tips the CDC to help <br />
                    kills the spread of the seasonbal flu and <br />
                    repiratory diseases</p>
                </section>
            </div>
        </div>
    </div>
    <br />
    <div name = "parentDiv"> 
        <div name = "childDiv" className='p-4 text-center'>
            <strong className='text-muted'> 
                MEET OUR 
            </strong>
            <h2 className=''>OUR TEAM</h2>
            <p className='text-muted'>The member of our highly experienced team is dedicated to providing you <br />
            with only best service we can possibly provide.</p>
        </div>

    <div className='d-flex justify-content-around'>
    <div className="position-relative" style={{ width: '30vw', height: '100vh', overflow: 'visible' }}>
  <img
    src="https://img.freepik.com/premium-photo/optimistic-young-woman-yellow-apron-gloves-dancing-with-mop-house-cleaning-routine-against-violet-background_251859-3662.jpg"
    alt="imgs"
    className="img-fluid "
    style={{ objectFit: 'cover', height: '100%', width: '100%' }}
  />

  <div
    name="box"
    className="border border-dark-1 p-3 text-center bg-white position-absolute start-50 translate-middle-x g-box"
    style={{
      bottom: '-10%',
      zIndex: 1,
      width: '70%',
      transform: 'translateX(-50%)',
    }}
  >
    <h3 className="text-black m-0" style={{ zIndex: 2 }}>Laura Jones</h3>
    <p className="text-muted m-0" style={{ marginTop: '5px', zIndex: 1 }}>Cleaner</p>
  </div>
</div>

<div className="position-relative" style={{ width: '30vw', height: '100vh', overflow: 'visible' }}>
  <img
    src="https://img.freepik.com/premium-photo/portrait-woman-cleaner-uniform-office-home-cleaning-services_752325-14486.jpg"
    alt="imgs"
    className="img-fluid girlsImg"
    style={{ objectFit: 'cover', height: '100%', width: '100%' }}
  />

  <div
    name="box"
    className="border border-dark-1 p-3 text-center bg-white position-absolute start-50 translate-middle-x g-box"
    style={{
      bottom: '-10%',
      zIndex: 1,
      width: '70%',
      transform: 'translateX(-50%)',
    }}
  >
    <h3 className="text-black m-0" style={{ zIndex: 2 }}>Sara Ryan</h3>
    <p className="text-muted m-0" style={{ marginTop: '5px', zIndex: 1 }}>Cleaner</p>
  </div>
</div>

<div className="position-relative" style={{ width: '30vw', height: '100vh', overflow: 'visible' }}>
  <img
    src="https://www.pngitem.com/pimgs/m/208-2085152_transparent-cleaning-lady-png-cleaning-woman-png-png.png"
    alt="imgs"
    className="img-fluid girlsImg"
    style={{ objectFit: 'cover', height: '100%', width: '100%' }}
  />

  <div
    name="box"
    className="border border-dark-1 p-3 text-center bg-white position-absolute start-50 translate-middle-x g-box"
    style={{
      bottom: '-10%',
      zIndex: 1,
      width: '75%',
      transform: 'translateX(-50%)',
    }}
  >
    <h3 className="text-black m-0" style={{ zIndex: 2 }}>Monica Jones</h3>
    <p className="text-muted m-0" style={{ marginTop: '5px', zIndex: 1 }}>Cleaner</p>
  </div>
</div>
    </div>
    <br />
    <br />
    <br />
    </div>
    <div className='text-center dotss'><RxBorderDotted style={{width:"100px",height:"70px"}}/></div>
    <br />
    <br />
  </div>

  <div className="py-5 boss">
  <div className="position-relative" style={{ width: '100%', height: '70vh' }}>
    <img
      src="https://media.istockphoto.com/id/1289755079/photo/colored-kitchen-napkins-and-colorful-sponges-on-a-blue-background.jpg?s=612x612&w=0&k=20&c=OwmHqFoDIRz6IK8koQNMkUzbYZxYrn7pMMAbVj5HGhY="
      alt="spongeimg"
      className="img-fluid position-absolute w-100 h-100"
      style={{ objectFit: 'cover', filter: 'brightness(0.9)', zIndex: -1 }}
    />
    <div className="text-center needhelps" style={{ position: 'relative', zIndex: 1, top: '70px' }}>
      <PiPlayPauseFill className='text-white' style={{width:"100px",height:"70px"}}/>
      <p>clean your worries away</p>
      <h2>Need Help With Cleaning?</h2>
      <button className="bg-info border-0 p-2 rounded px-4">Request Call Back</button>
    </div>

    <div
  className="position-absolute bg-white border border-white p-0 shadow-lg"
  style={{
    width: '100%',
    maxWidth: '70%', 
    left: '15%',
    top: '440px',
    zIndex: 1,
  }}
>
  <div className="row justify-content-around tstt">
    <div className="col-11 col-md-3 text-center mb-3 mb-md-0">
      <div className='d-flex hpyCustomer'>
        <MdEmojiEmotions className='text-info' style={{ width: "60px", height: "40px" }} />
        <div>
          <h3>385</h3>
          <p className="text-muted">Happy Customer</p>
        </div>
      </div>
    </div>


    <div className="vr d-none d-md-block" style={{ width: '0.1px', backgroundColor: 'rgba(0, 0, 0, 0.1)' }}></div>


    <div className="col-12 col-md-3 text-center mb-3 mb-md-0">
      <div className='d-flex hpyCustomer'>
        <MdEmojiEmotions className='text-info' style={{ width: "60px", height: "40px" }} />
        <div>
          <h3>385</h3>
          <p className="text-muted">Happy Customer</p>
        </div>
      </div>
    </div>


    <div className="vr d-none d-md-block" style={{ width: '0.5px', backgroundColor: 'rgba(0, 0, 0, 0.1)' }}></div>

    <div className="col-12 col-md-3 text-center mb-3 mb-md-0">
      <div className='d-flex hpyCustomer'>
        <MdEmojiEmotions className='text-info' style={{ width: "60px", height: "40px" }} />
        <div>
          <h3>385</h3>
          <p className="text-muted">Happy Customer</p>
        </div>
      </div>
    </div>

  
    <div className="vr d-none d-md-block" style={{ width: '0.5px', backgroundColor: 'rgba(0, 0, 0, 0.1)' }}></div>
  </div>
</div>

  </div>
</div>

     <br /><br /><br /><br />
     <div className='text-center whycoose'>
        <section>
            <strong className='text-muted'>
                WHY CHOOSE US
            </strong>
            <h2>
                Recent News
            </h2>
            <p style={{color:"slategray"}}>
                We Specialize in intelligent & efficient search and belives in the power of <br />
                partnership to grow business.
            </p>
        </section>
        <br />
        <br />
     </div>
     <br />
     <br />
     <br />

     <div className="container-fluid">
  <div className="row justify-content-center" style={{ gap: "10px" }}>

    <section className="col-12 col-sm-6 col-md-4" style={{ flex: "1 1 30vw", minWidth: "280px" }}>
      <div className="position-relative" style={{ width: '100%', height: '40vh', overflow: 'visible' }}>
        <img
          src="https://pueronline.in/cdn/shop/articles/Mopped_floor_but_still_sticky_Find_out_why__27.jpg?v=1716981661&width=2048"
          alt="imgMoppingFloor"
          className="img-fluid"
          style={{ objectFit: 'cover', height: '100%', width: '100%' }}
        />
        <div
          name="box"
          className="border-info p-3 text-center bg-white position-absolute start-50 translate-middle-x"
          style={{
            borderBottom:"3px solid",
            bottom: '-30%',
            zIndex: 1,
            width: '90%',
            height: 'fit-content',
            transform: 'translateX(-50%)',
          }}
        >
          <p className="mb-1 text-muted text-md-start" style={{ fontSize: '30px' }}>CLEANING</p>
          <h6 className='text-md-start' style={{ fontSize: '30px' }}>Temporary Ruling</h6>
          <h4 className='text-md-start' style={{ color: "lightslategrey", fontSize: '15px' }}>Washla has met the demand of a growing world cleaning tremendous</h4>
          <div className='d-flex hpyCustomer text-start'>
            <img src="https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxsTlRVeFpUZzBNQzFpWkdNM0xUUTROMlF0WVRVeVpDMWxZelF6TWpjd1kyVXpOelVHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--df4488ff9f879c294e5a2461b3cd05275aeee7b3/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e9280d525ba1fc2f95c971c0fbcb4a2ca8b55dd/prompthero-prompt-1a12c663fc9.png" alt="imgs"
            height="80px" width="70px" style={{borderRadius:"80%",objectFit:"cover",paddingRight:"5px"}}/>
            <div style={{paddingLeft:"10px"}}>
            <h2>Martha Smith</h2>
            <p className='text-muted'>Washla CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="col-12 col-sm-6 col-md-4" style={{ flex: "1 1 30vw", minWidth: "280px"}}>
      <div className="position-relative" style={{ width: '100%', height: '40vh', overflow: 'visible'}}>
        <img
          src="https://extension.usu.edu/images/cleaning.png"
          alt="imgMoppingFloor"
          className="img-fluid"
          style={{ objectFit: 'cover', height: '100%', width: '100%'}}
        />
        <div
          name="box"
          className="p-3 border-info text-center bg-white position-absolute start-50 translate-middle-x"
          style={{
            borderBottom:"3px solid",
            bottom: '-30%',
            zIndex: 1,
            width: '90%',
            height: 'fit-content',
            transform: 'translateX(-50%)',
          }}
        >
          <p className="mb-1 text-muted text-md-start" style={{ fontSize: '30px' }}>CLEANING</p>
          <h6 className='text-md-start' style={{ fontSize: '30px' }}>The Expands</h6>
          <h4 className='text-md-start' style={{ color: "lightslategrey", fontSize: '15px' }}>Washla has met the demand of a growing world cleaning tremendous</h4>
          <div className='d-flex hpyCustomer text-start'>
            <img src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/78e88f76-29bf-4289-9624-719aec0f7bcb/e516f677-4846-4a28-9707-ba00ffa49479.png" alt="imgs"
            height="80px" width="70px" style={{borderRadius:"80%",objectFit:"cover",paddingRight:"5px"}}/>
            <div style={{paddingLeft:"10px"}}>
            <h2>Laura Jones</h2>
            <p className='text-muted'>Accounting</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="col-12 col-sm-6 col-md-4" style={{ flex: "1 1 30vw", minWidth: "280px" }}>
      <div className="position-relative" style={{ width: '100%', height: '40vh', overflow: 'visible' }}>
        <img
          src="https://images.squarespace-cdn.com/content/v1/611b3a86fb6a226aadffcf79/321e3d16-830b-4000-9af2-de8b90e17d3c/Standard+Cleaning.png"
          alt="imgMoppingFloor"
          className="img-fluid"
          style={{ objectFit: 'cover', height: '100%', width: '100%' }}
        />
        <div
          name="box"
          className="border-info p-3 text-center bg-white position-absolute start-50 translate-middle-x"
          style={{
            borderBottom:"3px solid",
            bottom: '-30%',
            zIndex: 1,
            width: '90%',
            height: 'fit-content',
            transform: 'translateX(-50%)',
          }}
        >
          <p className="mb-1 text-muted text-md-start text-cd-start" style={{ fontSize: '30px' }}>CLEANING</p>
          <h6 className='text-md-start text-cd-start' style={{ fontSize: '30px' }}>Temporary Ruling</h6>
          <h4 className='text-md-start text-cd-start' style={{ color: "lightslategrey", fontSize: "15px" }}>Washla has met the demand of a growing world cleaning tremendous</h4>
          <div className='d-flex hpyCustomer text-start'>
            <img src="https://img.freepik.com/premium-photo/portrait-handsome-young-businessman-business-suit-men-s-beauty-fashion-intriguing-portrait-businessperson-dressed-suit-ai-generated_538213-4595.jpg" alt="imgs"
            height="80px" width="70px" style={{borderRadius:"80%",objectFit:"cover",paddingRight:"5px"}}/>
            <div style={{paddingLeft:"10px"}}>
            <h2>Matt Ryan</h2>
            <p className='text-muted'>Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

    <br /><br /><br /><br /><br />

    <footer className='p-5' style={{ backgroundColor: 'lightblue' }}>
      <div className='container'>
        <div className='row g-4 justify-content-around'>
          <section className='col-12 col-md-3 text-center text-md-start'>
            <img src="" alt="" />
            <br />
            <p className='text-muted'>
              Wash customers have a <br />
              tremendous opportunity to answer the call of logistics
            </p>
          </section>

          <section className='col-12 col-md-3 text-center text-md-start'>
            <h2>Get In Touch</h2>
            <br />
            <p>
              8273 NW 56th ST Miami, Florida <br />
              33195 United States.
            </p>
            <br />
            <p>
              info@amiso.com <br />
              052 5401 3322
            </p>
          </section>

          <section className='col-12 col-md-2 text-center text-md-start'>
            <h2>Quick Link</h2>
            <br />
            <p>Home</p>
            <p>FAQ</p>
            <p>Home</p>
            <p>FAQ</p>
          </section>

          <section className='col-12 col-md-3 text-center text-md-start'>
            <h2>Our Newsletter</h2>
            <br />
            <p>Subscribe to our newsletter to <br /> receive the latest news about our <br /> service.</p>
            <br />
            <input
              className='border-0 p-2 text-center'
              type="email"
              name="email"
              placeholder='Your email address'
            />
            <button className='border-0 p-2 bg-info text-white rounded'>SIGN UP</button>
          </section>
        </div>
      </div>

      <hr />
      <br />
      <br />

      <section className='d-flex justify-content-between align-items-center'>
        <div>
          <p>&copy; 2023 Amiso All rights reserved.</p>
        </div>
        <label className='d-flex'>
          <FaFacebookF />
          &nbsp;&nbsp;&nbsp;
          <FaTwitter />
          &nbsp;&nbsp;&nbsp;
          <IoLogoInstagram />
          &nbsp;&nbsp;&nbsp;
          <TiSocialLinkedin />
          &nbsp;&nbsp;&nbsp;
          {/* <div className='bg-info text-center' style={{width:"50px",height:"40px"}}><a href="#"><FaChevronUp className='bg-info text-white'/></a></div> */}
          <div className="bg-info text-center d-flex justify-content-center align-items-center" 
          style={{ width: "50px", height: "40px" }}><a href="#"><FaChevronUp className="text-white" /></a></div>

        </label>
      </section>
    </footer>
    </div>


  )
}

export default Apage2