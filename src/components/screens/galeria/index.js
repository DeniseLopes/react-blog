import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

const Images =
[{
        src: "./s3.jpg",
        thumbnail: "./s3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "/s3.jpg",
        thumbnail: "/s3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "/s3.jpg",
        thumbnail: "/s3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]

export default () => <Gallery images={Images}/>;