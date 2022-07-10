import React from 'react';
import {Link, useParams} from "react-router-dom";
import SvgLocation from "../../../components/svg/SvgLocation";
import classes from "./CatalogMapSection.module.scss";

const CatalogMapSection = () => {
    const params = useParams()

    return (
        <section className={classes.mapSection}>
            <div className={classes.textBlock}>
                {
                    params.type === 'flats' ?
                        <React.Fragment>
                            <h2>Показать найденные квартиры на карте</h2>
                            <p>Ищите новостройки рядом с работой,
                                парком или родственниками</p>
                        </React.Fragment>
                        : params.type === 'cottages' ?
                            <React.Fragment>
                                <h2>Показать найденные котеджи и усадьбы на карте</h2>
                                <p>Ищите котеджи и усадьбы рядом с работой,
                                    парком или родственниками</p>
                            </React.Fragment>
                            : params.type === 'baths' ?
                                <React.Fragment>
                                    <h2>Показать найденные бани и сауны на карте</h2>
                                    <p>Ищите бани и сауны рядом с работой,
                                        парком или родственниками</p>
                                </React.Fragment>
                                : params.type === 'cars' ?
                                    <React.Fragment>
                                        <h2>Показать найденные машины на карте</h2>
                                        <p>Ищите машины рядом с работой,
                                            парком или родственниками</p>
                                    </React.Fragment>
                                    :
                                    <React.Fragment>
                                        <h2>Показать найденные квартиры на карте</h2>
                                        <p>Ищите новостройки рядом с работой,
                                            парком или родственниками</p>
                                    </React.Fragment>
                }

                <Link to={'/404'}>
                    <SvgLocation width={'12'} height={'15'} color={'#FFD54F'}/>
                    Открыть карту
                </Link>
            </div>
        </section>
    );
};

export default CatalogMapSection;
