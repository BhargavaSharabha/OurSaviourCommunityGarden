// import React, { useState } from "react";
// import IMAGE_1 from './portImages/1.jpg';
// import IMAGE_3 from './portImages/3.jpg';
// import IMAGE_4 from './portImages/4.jpg';
// import IMAGE_5 from './portImages/5.jpg';
// import IMAGE_6 from './portImages/6.jpg';
// import IMAGE_7 from './portImages/7.jpg';
// import IMAGE_8 from './portImages/8.jpg';
// import IMAGE_9 from './portImages/9.jpg';
// import IMAGE_10 from './portImages/10.jpg';
// import IMAGE_11 from './portImages/11.jpg';
// import IMAGE_12 from './portImages/12.jpg';
// import IMAGE_13 from './portImages/13.jpg';
// import IMAGE_14 from './portImages/14.jpg';
// import IMAGE_15 from './portImages/15.jpg';
// import IMAGE_16 from './portImages/16.jpg';
// import IMAGE_17 from './portImages/17.jpg';
// import './Gallery.css';
// import CloseIcon from '@mui/icons-material/Close';
// import Footer from "./Footer";



// const Gallery = () => {
//     const [model, setModel] = useState(false);
//     const [tempimgSrc, setTempImgSrc] = useState('');
//     const [tempTitle, setTempTitle] = useState(''); 


//     const data = [
//         { id: 1, imgSrc: IMAGE_1, title: "Children harvest fruits for pleasant groove pantry/ for donaOons" },
//         { id: 2, imgSrc: IMAGE_3, title: "Fresh Greens" },
//         { id: 3, imgSrc: IMAGE_4, title: "Tomato Garden" },
//         { id: 4, imgSrc: IMAGE_5, title: "Just food, But joy, peace, and a real connecOon with creaOon. A spiritual retreat from a noisy world and hurried people. Grow a garden" },
//         { id: 5, imgSrc: IMAGE_6, title: "Root crops and greens." },
//         { id: 6, imgSrc: IMAGE_7, title: "Family enjoy harvest" },
//         { id: 7, imgSrc: IMAGE_8, title: "church group harvest" },
//         { id: 8, imgSrc: IMAGE_9, title: "SMU BOAZ Commons community partner" },
//         { id: 9, imgSrc: IMAGE_10, title: "PlanOng Fig Orchard by Boaz Commons" },
//         { id: 10, imgSrc: IMAGE_11, title: "Tiller donaOon from Boaz Commons" },
//         { id: 11, imgSrc: IMAGE_12, title: "Children love to harvest." },
//         { id: 12, imgSrc: IMAGE_13, title: "SMU engages Commons community partner" },
//         { id: 13, imgSrc: IMAGE_14, title: "Squash, tomatoes, and corn." },
//         { id: 14, imgSrc: IMAGE_15, title: " Youth group harvests tomatoes" },
//         { id: 15, imgSrc: IMAGE_16, title: "Pleasant Grove Food Pantry clients receive donaOons." },
//         { id: 16, imgSrc: IMAGE_17, title: " Nithin Raj Chanda smu graduate student Smu engage Dallas/Hegi Family Career, Development Center 2024 Inter: OSCG Website Designer/Developer " }
//     ];


//     const getImg = (imgSrc, title) => {
//         setTempImgSrc(imgSrc);
//         setTempTitle(title); 
//         setModel(true);
//     }
//     return(
//         <>
//         <div className={model ? "model open" : "model"}>
//             <img src={tempimgSrc} alt={tempTitle}/>
//             <div className="title">{tempTitle}</div>
//             <CloseIcon onClick={() => setModel(false)} />
//         </div>
//         <div className="gallery">
//             {
//                 data.map((item,index) => {
//                     return(
//                         <div className="pics" key={index} onClick={() => getImg(item.imgSrc, item.title)}>
//                             <img src={item.imgSrc} style={{width:"100%"}} alt={item.title} />
//                         </div>
//                     )
//                 })
//             }
//         </div>
//         <br/>
//         <Footer/>
//         </>
//     );
// }

// export default Gallery;



import React, { useState, useEffect, useMemo } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import IMAGE_1 from './portImages/1.jpg';
import IMAGE_3 from './portImages/3.jpg';
import IMAGE_4 from './portImages/4.jpg';
import IMAGE_5 from './portImages/5.jpg';
import IMAGE_6 from './portImages/6.jpg';
import IMAGE_7 from './portImages/7.jpg';
import IMAGE_8 from './portImages/8.jpg';
import IMAGE_9 from './portImages/9.jpg';
import IMAGE_10 from './portImages/10.jpg';
import IMAGE_11 from './portImages/11.jpg';
import IMAGE_12 from './portImages/12.jpg';
import IMAGE_13 from './portImages/13.jpg';
import IMAGE_14 from './portImages/14.jpg';
import IMAGE_15 from './portImages/15.jpg';
import IMAGE_16 from './portImages/16.jpg';
import IMAGE_17 from './portImages/17.jpg';
import './Gallery.css';
import CloseIcon from '@mui/icons-material/Close';
import Footer from "./Footer";

// Preload function
export const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src);
        img.onerror = reject;
    });
};

// Preload multiple images function
export const preloadMultipleImages = async (imagesArray) => {
    try {
        await Promise.all(imagesArray.map(src => preloadImage(src)));
        console.log('All images have been preloaded');
    } catch (error) {
        console.error('An error occurred while preloading images', error);
    }
};

const Gallery = () => {
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const [tempTitle, setTempTitle] = useState('');
    const [preloadedImages, setPreloadedImages] = useState([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const data = useMemo(() => [
        { id: 1, imgSrc: IMAGE_1, title: "Children harvest fruits for pleasant groove pantry/ for donations" },
        { id: 2, imgSrc: IMAGE_3, title: "Fresh Greens" },
        { id: 3, imgSrc: IMAGE_4, title: "Tomato Garden" },
        { id: 4, imgSrc: IMAGE_5, title: "Not just food, But joy, peace, and a real connection with creation. A spiritual retreat from a noisy world and hurried people. Grow a garden" },
        { id: 5, imgSrc: IMAGE_6, title: "Root crops and greens." },
        { id: 6, imgSrc: IMAGE_7, title: "Family enjoy harvest" },
        { id: 7, imgSrc: IMAGE_8, title: "Church group harvest" },
        { id: 8, imgSrc: IMAGE_9, title: "SMU BOAZ Commons Community Partner" },
        { id: 9, imgSrc: IMAGE_10, title: "Planting Fig Orchard by Boaz Commons" },
        { id: 10, imgSrc: IMAGE_11, title: "Tiller donation from Boaz Commons" },
        { id: 11, imgSrc: IMAGE_12, title: "Children love to harvest." },
        { id: 12, imgSrc: IMAGE_13, title: "SMU Engage Commons Community Partner" },
        { id: 13, imgSrc: IMAGE_14, title: "Squash, tomatoes, and corn." },
        { id: 14, imgSrc: IMAGE_15, title: "Youth group harvests tomatoes" },
        { id: 15, imgSrc: IMAGE_16, title: "Pleasant Grove Food Pantry clients receive donations." },
        { id: 16, imgSrc: IMAGE_17, title: "Nithin Raj Chanda SMU graduate student SMU Engage Dallas/Hegi Family Career, Development Center 2024 Intern: OSCG Website Designer/Developer " }
    ], []);

    useEffect(() => {
        const preload = async () => {
            const promises = data.map((item) => preloadImage(item.imgSrc));
            const images = await Promise.all(promises);
            setPreloadedImages(images);
            setImagesLoaded(true); // Set imagesLoaded to true when all images are preloaded
        };

        preload();
    }, [data]);

    const getImg = (imgSrc, title) => {
        setTempImgSrc(imgSrc);
        setTempTitle(title);
        setModel(true);
    };

    return (
        <>
            <div className={model ? "model open" : "model"}>
                <img src={tempimgSrc} alt={tempTitle} />
                <div className="title">{tempTitle}</div>
                <CloseIcon onClick={() => setModel(false)} />
            </div>
            <div className="gallery">
                {
                    data.map((item, index) => (
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc, item.title)}>
                            <LazyLoadImage
                                src={item.imgSrc}
                                alt={item.title}
                                placeholderSrc={preloadedImages[index] || "placeholder.png"}
                                effect="blur"
                                style={{ width: "100%" }}
                            />
                        </div>
                    ))
                }
            </div>
            <br />
            {imagesLoaded && <Footer />}
        </>
    );
}

export default Gallery;


