import React from 'react';
import data from '../../../../assets/data/accordion';
import AccordionItem from './AccordionItem';


const Accordion = () => {
    return (
        <div className="container">
            <div className="title">Frequently Asked Questions
            {
                    data.map(faq => {
                        return <AccordionItem {...faq} />
                    })
                }
            </div>
        </div>

    )
}
export default Accordion;