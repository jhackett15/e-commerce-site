import React from 'react'
import {connect} from 'react-redux'

 
import CollectionsItem from '../../Components/collection-item/collection-item'

import {selectCollection} from '../../Redux/shop/shop.selector'
import './collection.styles.scss'




const CollectionPage = ({ collection }) => {

    console.log(collection)
const {title, items} = collection;
    return(
        
    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {  items.map(item => (
            <CollectionsItem
                key={item.id}
                item={item}/>
                    )
                )
            }  
        </div>
    </div>
)
    }

    const mapStateToProps = (state, ownProps) => ({ //use 2nd optional param.. props of the componene that were wrapping in the connect
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    })
export default connect(mapStateToProps)(CollectionPage);