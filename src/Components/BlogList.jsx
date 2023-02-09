import React from 'react'
import { useParams } from 'react-router-dom'

export default function BlogList(props) {

    const {id} = useParams();

    const [BlogList, setBlog] = useState([
        {   id: '1',
            title: 'Titre 1',
            description: 'Article numéro 1'},
        
        {   id: '2',
            title:'Titre 2',
            description: 'Article numéro 2'},

        {   id: '3',
            title: 'Titre 3',
            description: 'Article numéro 3'},
    ])
    return (
        <div>BlogList
            
        </div>
    )
}
