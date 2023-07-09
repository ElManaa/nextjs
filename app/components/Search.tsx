import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from '@/styles/components/Search.module.scss'
import React, { useEffect, useRef } from 'react'


interface SearchProps  {
    value : string | false,
    handleChange : React.ChangeEventHandler<HTMLInputElement>,
    placeholder : string
}

function Search({value,handleChange,placeholder} : SearchProps) { 
  return (
    <div className={`${styles.container}`}>
        <div className='row'>
            <div className='col d-flex align-items-center'>
                <FontAwesomeIcon icon={faMagnifyingGlass} color="#707C97"/>
                <input 
                    type="text" 
                    value={value ? value : ''}
                    onChange={handleChange}
                    placeholder={placeholder} 
                />
            </div>
        </div>
    </div>
  )
}

Search.defaultProps = {
    placeholder : "Search"
}

export default Search