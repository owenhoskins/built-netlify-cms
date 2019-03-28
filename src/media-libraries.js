import * as CMS from '../../netlify-cms-core/src';
import uploadcare from '../../netlify-cms-media-library-uploadcare/src';
import cloudinary from '../../netlify-cms-media-library-cloudinary/src';

const { registerMediaLibrary } = CMS;

registerMediaLibrary(uploadcare);
registerMediaLibrary(cloudinary);
