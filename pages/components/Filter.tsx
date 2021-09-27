import React,{useState} from 'react'

const Filter = () => {
    const [brand, setBrand] = useState('')
    return (
        <div className='filter-container'>
            <div className='brand-filter-container'>
                <div  className='filter-title'>
                    <span>Filter by Brand</span>
                </div>
                {/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"> */}
                <div className='single-checkbox-input'>
                    <input type="checkbox" id="html" name="fav_language" value="almay" />
                    <label>Almay</label>    
                </div>
                <div className='single-checkbox-input'>
                    <input type="checkbox" id="html" name="fav_language" value="alva" />
                    <label>Alva</label>    
                </div>
                <div className='single-checkbox-input'>
                    <input type="checkbox" id="html" name="fav_language" value="annabelle" />
                    <label>Annabelle</label>    
                </div>
                <div className='single-checkbox-input'>
                    <input type="checkbox" id="html" name="fav_language" value="benefit" />
                    <label>Benefit</label>    
                </div>
                <div className='single-checkbox-input'>
                    <input type="checkbox" id="html" name="fav_language" value="boosh" />
                    <label>Boosh</label>    
                </div>
            </div>
        </div>
    )
}

export default Filter
