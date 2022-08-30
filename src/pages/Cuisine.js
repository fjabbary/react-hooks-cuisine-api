import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

function Cuisine() {
    const { name } = useParams()
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}>

            Cuisine: {name}

        </motion.div>
    )
}

export default Cuisine