import React from 'react';
import styles from './style.module.scss';
import Icon from '@mdi/react';
import { mdiFacebookBox, mdiTwitterBox, mdiInstagram } from '@mdi/js';

const Footer = () => (
    <div className={styles.footer}>
        <div className={styles.inner}>
            <div className={styles.bottom}>
                <div className="row">
                    <div className="col-sm-6">
                        <p>
                            <strong>Connect with me!</strong>
                        </p>
                        <a href="https://fb.me/GWSoftware" target="_blank">
                            <Icon path={mdiFacebookBox}
                                title="Facebook Page"
                                size={1}
                                color="black" />
                        </a>
                        <a href="https://twitter.com/GrantMaxly" target="_blank">
                            <Icon path={mdiTwitterBox}
                                title="Twitter Page"
                                size={1}
                                color="black" />
                        </a>
                        <a href="#" target="_blank">
                            <Icon path={mdiInstagram}
                                title="Instagram Page"
                                size={1}
                                color="black" />
                        </a>
                    </div>
                    <div className="col-sm-6">
                        <div className={styles.copyright}>
                            
                            <span>
                                © 2020{' '}
                                <a href="http://grantwatson.app" target="_blank" rel="noopener noreferrer">
                                    Grant Watson
                </a>
                                <br />
                                All rights reserved
              </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Footer
