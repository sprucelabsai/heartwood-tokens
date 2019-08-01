import React from "react";
import componentsJson from "../../../build/js/components-scss.js";

const ComponentsLayout = (): React.ReactElement => {
  const components = componentsJson.components;
  const componentKeys = Object.keys(components);
  return (
    <>
      <h1 className="title-lg">Components</h1>
      {componentKeys.map(typeKey => {
        const type = components[typeKey];
        const itemKeys = Object.keys(type);
        return (
          <section className="component-section" key={typeKey}>
            <h2 className="title-sm">{typeKey}</h2>
            {itemKeys.map(itemKey => {
              const item = components[typeKey][itemKey];
              const subitemKeys = Object.keys(item);
              console.log({ item });

              if (item.value) {
                return (
                  <div>
                    <h3 className="heading-lg">Base values</h3>
                    <p>{`$${item.name}: ${item.value}`}</p>
                  </div>
                );
              }

              return (
                <div key={itemKey}>
                  <h3 className="heading-lg">{itemKey}</h3>
                  {subitemKeys.map(subitemKey => {
                    const subitem = components[typeKey][itemKey][subitemKey];
                    const stateKeys = Object.keys(subitem);
                    console.log({ stateKeys });

                    if (subitem.value) {
                      return (
                        <div>
                          <label>Base Values</label>
                          <p>{`$${subitem.name}: ${subitem.value}`}</p>
                        </div>
                      );
                    }
                    return (
                      <div key={subitemKey}>
                        <h4 className="subheading-sm">{subitemKey}</h4>
                        <label>States</label>
                        {stateKeys.map(stateKey => {
                          const state =
                            components[typeKey][itemKey][subitemKey][stateKey];

                          return (
                            <div key={stateKey}>
                              <p>{`$${state.name}: ${state.value}`}</p>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </section>
        );
      })}
    </>
  );
};

export default ComponentsLayout;
