import React from 'react'


export const View1 = ({books1}) => {
    
    return books1.map(book=>(
        
        <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.name}</td>
            <td>{book.price}</td>
            <td>{book.image}</td>
                    
        </tr>            
    
))
}

// onClick={()=>deleteBook(book.isbn)} add in delete