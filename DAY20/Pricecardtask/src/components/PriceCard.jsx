// src/PriceCard.jsx
import React from 'react';
import import './App.css';

const plans = [
  {
    name: 'Free',
    price: '$0/month',
    features: ['Single User', '50GB Storage', 'Unlimited Public Projects', 'Community Access', 'Free Subdomain'],
    notIncluded: ['Unlimited Private Projects', 'Dedicated Phone Support', 'Monthly Status Reports']
  },
  {
    name: 'Plus',
    price: '$9/month',
    features: ['5 Users', '50GB Storage', 'Unlimited Public Projects', 'Community Access', 'Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain'],
    notIncluded: ['Monthly Status Reports']
  },
  {
    name: 'Pro',
    price: '$49/month',
    features: ['Unlimited Users', '50GB Storage', 'Unlimited Public Projects', 'Community Access', 'Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports']
  }
];

const PriceCard = () => (
  <div className="pricing-card">
    {plans.map((plan, index) => (
      <div key={index} className="plan">
        <h2>{plan.name}</h2>
        <h3>{plan.price}</h3>
        <ul>
          {plan.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
        <ul className="not-included">
          {plan.notIncluded.map((item, i) => (
            <li key={i} className="not-included">{item} (not included)</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default PriceCard;
