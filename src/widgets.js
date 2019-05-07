import * as CMS from '../../netlify-cms-core/src';
import React from 'react';

const { registerWidget } = CMS;
const { registerPreviewTemplate } = CMS;

import { GalleryControl, GalleryPreview } from '../../netlify-cms-widget-gallery/src';
registerWidget('gallery', GalleryControl, GalleryPreview);

import { VimeoControl, VimeoPreview } from '../../netlify-cms-widget-vimeo/src';
registerWidget('vimeo', VimeoControl, VimeoPreview);


import * as NetlifyCmsWidgetString from '../../netlify-cms-widget-string/src';
import * as NetlifyCmsWidgetNumber from '../../netlify-cms-widget-number/src';
import * as NetlifyCmsWidgetText from '../../netlify-cms-widget-text/src';
import * as NetlifyCmsWidgetImage from '../../netlify-cms-widget-image/src';
import * as NetlifyCmsWidgetFile from '../../netlify-cms-widget-file/src';
import * as NetlifyCmsWidgetSelect from '../../netlify-cms-widget-select/src';
import * as NetlifyCmsWidgetMarkdown from '../../netlify-cms-widget-markdown/src';
import * as NetlifyCmsWidgetList from '../../netlify-cms-widget-list/src';
import * as NetlifyCmsWidgetObject from '../../netlify-cms-widget-object/src';
import * as NetlifyCmsWidgetRelation from '../../netlify-cms-widget-relation/src';
import * as NetlifyCmsWidgetBoolean from '../../netlify-cms-widget-boolean/src';
import * as NetlifyCmsWidgetMap from '../../netlify-cms-widget-map/src';
import { NetlifyCmsWidgetDate } from '../../netlify-cms-widget-date/src';
import { NetlifyCmsWidgetDatetime } from '../../netlify-cms-widget-datetime/src';

registerWidget(
  'string',
  NetlifyCmsWidgetString.controlComponent,
  NetlifyCmsWidgetString.previewComponent,
);
registerWidget(
  'number',
  NetlifyCmsWidgetNumber.controlComponent,
  NetlifyCmsWidgetNumber.previewComponent,
);
registerWidget(
  'text',
  NetlifyCmsWidgetText.controlComponent,
  NetlifyCmsWidgetText.previewComponent,
);
registerWidget(
  'list',
  NetlifyCmsWidgetList.controlComponent,
  NetlifyCmsWidgetList.previewComponent,
);
registerWidget(
  'markdown',
  NetlifyCmsWidgetMarkdown.controlComponent,
  NetlifyCmsWidgetMarkdown.previewComponent,
);
registerWidget(
  'image',
  NetlifyCmsWidgetImage.controlComponent,
  NetlifyCmsWidgetImage.previewComponent,
);
registerWidget(
  'file',
  NetlifyCmsWidgetFile.controlComponent,
  NetlifyCmsWidgetFile.previewComponent,
);
registerWidget(
  'select',
  NetlifyCmsWidgetSelect.controlComponent,
  NetlifyCmsWidgetSelect.previewComponent,
);
registerWidget(
  'object',
  NetlifyCmsWidgetObject.controlComponent,
  NetlifyCmsWidgetObject.previewComponent,
);
registerWidget(
  'relation',
  NetlifyCmsWidgetRelation.controlComponent,
  NetlifyCmsWidgetRelation.previewComponent,
);
registerWidget('boolean', NetlifyCmsWidgetBoolean.controlComponent);
registerWidget('map', NetlifyCmsWidgetMap.controlComponent, NetlifyCmsWidgetMap.previewComponent);
registerWidget([NetlifyCmsWidgetDate.Widget(), NetlifyCmsWidgetDatetime.Widget()]);


import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/core'
import styled from '@emotion/styled'


class CSSInjector extends React.Component {
  constructor() {
    super()
    const iframe = document.getElementsByTagName('iframe')[0]
    const iframeHead = iframe.contentDocument.head
    this.cache = createCache({ container: iframeHead })
  }

  render() {
    return (
      <CacheProvider value={this.cache}>
        {this.props.children}
      </CacheProvider>
    )
  }
}

const PreviewContainer = styled.div`
  font-family: Roboto, 'Helvetica Neue', HelveticaNeue, Helvetica, Arial, sans-serif;
`;

function isVisible(field) {
  return field.get('widget') !== 'hidden';
}

class PagePreview extends React.Component {
  render() {
    const { collection, fields, widgetFor } = this.props;
    if (!collection || !fields) {
      return null;
    }
    return (
      <PreviewContainer>
        {fields.filter(isVisible).map(field => (
          <div key={field.get('name')}>{widgetFor(field.get('name'))}</div>
        ))}
      </PreviewContainer>
    );
  }
}

registerPreviewTemplate('page', props => {
  return (
    <CSSInjector>
      <PagePreview {...props} />
    </CSSInjector>
)})
