import React, { Component } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Document, Page } from 'react-pdf';
import SectionHeading from '../commons/SectionHeading';

class FinantialTable extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { intl } = this.props;
    return (
      <div className='FinantialTable'>
        <div className='container'>
          <SectionHeading title={intl.formatMessage({ id: 'FinantialTableTitle' })} />
          <div className='FinantialTable-address'>
            <FormattedMessage id='FinantialTableWalletAddress'/>
            <br />
            <span className='FinantialTable-address-text'>
              0x74682Fc32007aF0b6118F259cBe7bCCC21641600
            </span>
          </div>
          {typeof window !== 'undefined' ?
            (
              <div className='FinantialTable-document'>
                <Document
                  file='/report.pdf'
                  onLoadSuccess={this.onDocumentLoadSuccess}
                >
                  <Page pageNumber={this.state.pageNumber} />
                </Document>
                <div className='FinantialTable-pages'>
                  {this.state.pageNumber > 1 ?
                    (
                      <a
                        className='btn btn-green'
                        onClick={() => {
                          this.setState({ pageNumber: this.state.pageNumber - 1 })
                        }}
                      >
                        Prev Page
                      </a>
                    ) : null
                  }
                  {this.state.pageNumber <= this.state.numPages ?
                    (
                      <a
                        className='btn btn-green'
                        onClick={() => {
                          this.setState({ pageNumber: this.state.pageNumber + 1 })
                        }}
                      >
                        Next Page
                      </a>
                    ) : null
                  }
                </div>
              </div>
            ) : null
          }
        </div>
      </div>
    );
  }
}

export default injectIntl(FinantialTable);
