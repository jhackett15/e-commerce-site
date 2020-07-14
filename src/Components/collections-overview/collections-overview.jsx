import React from 'react'
import PreviewCollection from '../preview-collection/preview.component'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCollections} from '../../Redux/shop/shop.selector'

import './collections-overview.styles.scss'

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {collections.map(({ id, index, ...otherCollectionProps}) => ( 
			<PreviewCollection key={collections.id} {...otherCollectionProps} />
			))
		}


    </div>
)

const mapStateToProps = createStructuredSelector({
	collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview);