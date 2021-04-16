import Row from 'components/Row';
import { Assets } from 'constants/images';
import { data } from 'constants/strings';
import * as React from 'react';
import Card from './components/Card';

import Wrapper from './components/Wrapper';


const Content = ({}) => {

    return (
        <Wrapper>
            <div className="row">
                {
                    data?.map((_item, _idx) => <div className="col-lg-3 col-md-6 col-sm-12" key={_item.id}>
                            <Card data={_item} key={_item.id}/>
                        </div>
                    )
                }
            </div>
        </Wrapper>
    )
}

export default Content
