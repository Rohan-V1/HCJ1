import { Accordion, AccordionSummary } from '@mui/material'
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function API() {
  const [quotes, setQuotes] = useState([])
  useEffect(() => {
    axios.get("https://dummyjson.com/quotes")
      .then((res) => {
        console.log(res.data.quotes, 1111)
        setQuotes(res.data.quotes)
      })
      .catch((err) => {
        console.log(err, 2222)
      })
  }, [])
  return (
    <div>

      {quotes.map((q)=>{
        return(
          <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">{q.author}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {q.quote}
          </Typography>
        </AccordionDetails>
      </Accordion>
        )
      })}

      

    </div>
  )
}
