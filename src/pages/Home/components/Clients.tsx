import { motion } from 'motion/react';
import './Clients.css';

import abedDermatology from '../../../Assets/images/Partners/Abed-Dermatology-Venerology-Clinic.png';
import amentiPharmacy from '../../../Assets/images/Partners/Amenti-Pharmacy.png';
import arifDiscount from '../../../Assets/images/Partners/Arif-Discount.png';
import bluPharmacy from '../../../Assets/images/Partners/Blu-Pharmacy.png';
import carefirst from '../../../Assets/images/Partners/Carefirst.png';
import daePharmacy from '../../../Assets/images/Partners/DAE-Pharmacy.png';
import deluxeProperties from '../../../Assets/images/Partners/Deluxe-Properties.png';
import ethioBestRealEstate from '../../../Assets/images/Partners/Ethio-Best-Real-Estate.png';
import homeElementsLuxury from '../../../Assets/images/Partners/Home-Elements-Luxury-Apartment.png';
import kelelaDerma from '../../../Assets/images/Partners/Kelela-Dermatovenereology-Clinic.png';
import keyHousing from '../../../Assets/images/Partners/Key-Housing-Finance-Solution-PLC.png';
import meydanHappy from '../../../Assets/images/Partners/Meydan-Happy-Import.png';
import nestleProperties from '../../../Assets/images/Partners/Nestle-Properties.png';
import oftanaBusiness from '../../../Assets/images/Partners/Oftana-Business-Trading.png';
import sprinttech from '../../../Assets/images/Partners/Sprinttech.png';
import vistaBanquet from '../../../Assets/images/Partners/Vista-Banquet-Hall.png';
import zerihunLaw from '../../../Assets/images/Partners/Zerihun-Law-Office.png';

const clients = [
  { name: 'Abed Dermatology & Venerology Clinic', logoPath: abedDermatology },
  { name: 'Amenti Pharmacy', logoPath: amentiPharmacy },
  { name: 'Arif Discount', logoPath: arifDiscount },
  { name: 'Blu Pharmacy', logoPath: bluPharmacy },
  { name: 'Carefirst', logoPath: carefirst },
  { name: 'DAE Pharmacy', logoPath: daePharmacy },
  { name: 'Deluxe Properties', logoPath: deluxeProperties },
  { name: 'Ethio Best Real Estate', logoPath: ethioBestRealEstate },
  { name: 'Home Elements Luxury Apartment', logoPath: homeElementsLuxury },
  { name: 'Kelela Dermatovenereology Clinic', logoPath: kelelaDerma },
  { name: 'Key Housing Finance Solution PLC', logoPath: keyHousing },
  { name: 'Meydan Happy Import', logoPath: meydanHappy },
  { name: 'Nestle Properties', logoPath: nestleProperties },
  { name: 'Oftana Business Trading', logoPath: oftanaBusiness },
  { name: 'Sprinttech', logoPath: sprinttech },
  { name: 'Vista Banquet Hall', logoPath: vistaBanquet },
  { name: 'Zerihun Law Office', logoPath: zerihunLaw },
];

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
          Trusted by Global <span className="clients-heading-accent">Innovation Leaders</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="clients-subtext"
        >
          We take pride in our long-term partnerships with diverse organizations across industries.
          We deliver the precision and expertise needed to scale for the world's most recognized brands.
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
