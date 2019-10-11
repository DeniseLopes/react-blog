import React from 'react';
import Gallery from 'react-grid-gallery';


const Images =

[{
        src: "/kalleo9.jpg",
        thumbnail: "/kalleo9.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: " filmado por Romulo Magalhães"
},
{
        src: "/kalleo8.jpg",
        thumbnail: "/kalleo8.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: " filmado por Romulo Magalhães"
},

{
        src: "/kalleo7.jpg",
        thumbnail: "/kalleo7.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}
]


export default () => <Gallery images={Images}/>;