import React from "react";
import "../../../App.css";
import "../../../responsive.app.css";
const ProductContent = () => {
  return (
    <div className="ProductContent-parent">
      <h5>The No-Clump Multi-Collagen Protein Powder</h5>
      <div>
        <h6>
          Ageless Multi-Collagen Provides You 5 Types of Collagen to Support:
        </h6>
        <ul>
          <li>Healthy Skin, Hair, and NailsFootnote†</li>
          <li>Gut, Joint, and Bone HealthFootnote†</li>
          <li>
            Athletic Performance, Recovery, and an Active LifestyleFootnote†
          </li>
        </ul>
      </div>
      <div>
        <h6>Plus, Every Serving of Ageless Multi-Collagen is:</h6>
        <ul>
          <li>
            Loaded with 10 Grams of Collagen Protein (per serving) including
            BioActive Collagen Peptides
          </li>
          <li>A Complete Protein Source Featuring 140mg of Tryptophan</li>
          <li>Tasteless and Odorless or Available in Delicious Flavors</li>
          <li>Mixes Instantly WITHOUT Clumps (in hot or cool liquids)</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductContent;
