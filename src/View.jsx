import React from 'react'


export const View = ({books,deleteBook}) => {
    
    return books.map(book=>(
        
        <tr key={book.name}>
            <td>{book.name}</td>
            <td>{book.email}</td>
            <td>{book.password}</td>
            <td>{book.phone}</td>
            <td className='btn btn-secondary btn-sm' onClick={()=>deleteBook(book.name)} >
              Delete 
            </td>           
        </tr>            
    
))
}

// onClick={()=>deleteBook(book.isbn)} add in delete