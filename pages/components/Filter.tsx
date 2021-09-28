import React,{ChangeEvent, ReactElement, useState} from 'react'
type GetBrandProps = {
    setBrandFunc : (a:string)=> void
}
const Filter = ({setBrandFunc} : GetBrandProps):ReactElement => {
    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
      setBrandFunc(e.target.value)
    }
    const BrandList = [
        {
            id: 1,
            name: ''
        },
        {
            id: 2,
            name: 'Almay'
        },
        {
            id: 3,
            name: 'Alva'
        },
        {
            id: 4,
            name: 'Anna Sui'
        },
        {
            id: 5,
            name: 'Annabele'
        },
        {
            id: 6,
            name: 'Benefit'
        },
        {
            id: 7,
            name: 'Boosh'
        },
        {
            id: 8,
            name: "burt's bees"
        },
        {
            id: 9,
            name: 'butter london'
        }
    ]
    return (
        <div className='filter-container'>
            <div className='brand-filter-container' onChange={handleChange} defaultValue=''>
                <div  className='filter-title'>
                    <span>Filter by Brand</span>
                </div>
                {BrandList.map(branditem => 
                    <div key={branditem.id} className='single-radio-input'>
                        <input
                            type="radio"
                            id="brand"
                            name="brand"
                            value={branditem.name.toLowerCase()}
                        />
                        <label>{branditem.name === '' ? 'All' : branditem.name}</label>    
                   </div>
                 )
                }
                {/* <input type="radio" id="vehicle1" name="vehicle1" value="Bike"> */}
                {/* <div className='single-radio-input'>
                    <input type="radio" id="html" name="fav_language" value="" />
                    <label>All Brands</label>    
                </div>
                <div className='single-radio-input'>
                    <input type="radio" id="html" name="fav_language" value="almay" />
                    <label>Almay</label>    
                </div>
                <div className='single-radio-input'>
                    <input type="radio" id="html" name="fav_language" value="alva" />
                    <label>Alva</label>    
                </div>
                <div className='single-radio-input'>
                    <input type="radio" id="html" name="fav_language" value="annabelle" />
                    <label>Annabelle</label>    
                </div>
                <div className='single-radio-input'>
                    <input type="radio" id="html" name="fav_language" value="benefit" />
                    <label>Benefit</label>    
                </div>
                <div className='single-radio-input'>
                    <input type="radio" id="html" name="fav_language" value="boosh" />
                    <label>Boosh</label>    
                </div> */}
                
            </div>
        </div>
    )
}

export default Filter
