import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';
import Header from '../components/commons/Header';
import SmartHero from '../components/SmartContracts/SmartHero';
import Description from '../components/SmartContracts/Description';
import SmartDetail from '../components/SmartContracts/SmartDetail';
import AuditorsCheck from '../components/SmartContracts/AuditorsCheck';
import SmartAuthor from '../components/SmartContracts/SmartAuthor';
import FinalReport from '../components/SmartContracts/FinalReport';
import DisclosurePolicy from '../components/SmartContracts/DisclosurePolicy';
import OrderAudit from '../components/SmartContracts/OrderAudit';
import OrderAuditModal from '../components/SmartContracts/OrderAuditModal';
import Testimonials from '../components/SmartContracts/Testimonials';
import Footer from '../components/commons/Footer';

class SmartContract extends PureComponent {
  state = {
    modalOpen: false,
  };

  handleOpenModal = event => {
    if (event) { event.preventDefault(); }
    this.setState({ modalOpen: true });
  }

  handleCloseModal = event => {
    if (event) { event.preventDefault(); }
    this.setState({ modalOpen: false });
  }

  render() {
    const { match } = this.props;
    return [
      <Layout key='SmartContractContainer' className='SmartContract' match={match}>
        <Header lang={match.params && match.params.lang ? match.params.lang : 'en'} />
        <SmartHero openModal={this.handleOpenModal} />
        <Description />
        <SmartDetail />
        <AuditorsCheck />
        <SmartAuthor />
        <FinalReport />
        <Testimonials />
        <DisclosurePolicy />
        <OrderAudit openModal={this.handleOpenModal} />
        <Footer lang={match.params && match.params.lang ? match.params.lang : 'en'} />
      </Layout>,
      <OrderAuditModal
        key='SmartContractOrderModal'
        open={this.state.modalOpen}
        onClose={this.handleCloseModal}
      />
    ];
  }
}

export default hot(module)(SmartContract);
