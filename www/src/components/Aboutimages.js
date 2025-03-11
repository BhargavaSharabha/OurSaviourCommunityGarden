import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IMAGE_18 from './portImages/18.png'
import IMAGE_19 from './portImages/19.png'
import IMAGE_20 from './portImages/20.png'
import IMAGE_21 from './portImages/21.png'
import IMAGE_22 from './portImages/22.png'
import IMAGE_23 from './portImages/23.png'
import IMAGE_24 from './portImages/24.png'
import IMAGE_25 from './portImages/25.png'
import IMAGE_26 from './portImages/26.png'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: 500, height: 800 }} // Increased height to 600
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//     author: '@arwinneil',
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//     cols: 2,
//   },
  
// ];


const itemData = [
  {
    img: IMAGE_18,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: IMAGE_19,
    title: 'Burger',
  },
  {
    img: IMAGE_20,
    title: 'Camera',
  },
  {
    img: IMAGE_21,
    title: 'Coffee',
    cols: 2,
  },
  {
    img: IMAGE_22,
    title: 'Hats',
    cols: 2,
  },
  {
    img: IMAGE_23,
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: IMAGE_24,
    title: 'Basketball',
  },
  {
    img: IMAGE_25,
    title: 'Fern',
  },
  {
    img: IMAGE_26,
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  // {
  //   img: ,
  //   title: 'Tomato basil',
  // },
  // {
  //   img: ,
  //   title: 'Sea star',
  // },
  // {
  //   img: ,
  //   title: 'Bike',
  //   cols: 2,
  // },
  
];
