import { motion } from 'motion/react';
import { clientsData } from './data/homeContentData';
import './Clients.css';

const { clients, heading, subtext } = clientsData;

export default function Clients() {
  return (
    <section className="clients-section">
      <div className="clients-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clients-heading"
        >
          {heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="clients-subtext"
        >
          {subtext}
        </motion.p>
      </div>

      <div className="clients-grid-wrap">
        <div className="clients-grid">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="clients-card"
            >
              <div className="clients-card-inner">
                <img
                  src={client.logoPath}
                  alt={client.name}
                  className="clients-card-img"
                // onError={(e) => {
                //   e.currentTarget.style.display = 'none';
                //   e.currentTarget.nextElementSibling?.classList.remove('clients-card-fallback');
                //   (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                // }}
                />
                <span className="clients-card-fallback">
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
