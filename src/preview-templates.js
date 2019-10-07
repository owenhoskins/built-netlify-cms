import React from 'react';
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/core'
import styled from '@emotion/styled'
import * as CMS from '../../netlify-cms-core/src';
const { registerPreviewTemplate } = CMS;


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

registerPreviewTemplate('artists', props => {
  return (
    <CSSInjector>
      <PagePreview {...props} />
    </CSSInjector>
)})