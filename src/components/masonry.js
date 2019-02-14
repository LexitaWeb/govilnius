import * as React from 'react';
import Masonry from 'react-masonry-component';
 
const masonryOptions = {
	transitionDuration: 0,
	columnWidth:200
};
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }
 
class Gallery extends React.Component {
    render() {
        const childElements = this.props.elements.map(function(element){
           return (
                <div className="image-element-class col-lg-3" >
                    <img src={element.src} className="w-100" />
					<div>
						{element.desc}
					</div>
                </div>
            );
        });
    
        return (
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'div'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {childElements}
            </Masonry>
        );
    }
}
 
export default Gallery;