import React from 'react';
import mainPhoto from '../../assets/mainPhoto.png'
import s from './profileCard.module.css'
const ProfileCard = () => {
    return (
        <div className={s.ProfilePage}>
            <article className={s.card}>
                <div className={s.background}>
                    <img src={mainPhoto} alt="profile"/>

                </div>
                <div className={s.content}>
                    <h2> Vladislav Vakula </h2>
                    <p>
                        Frontend Developer
                        <> </>
                        <a href={'/'}>Link</a>
                    </p>
                    <p>Helping with:</p>
                    <ul className={s.chips}>
                        <li className={s.chip}>JS</li>
                        <li className={s.chip}>HTML</li>
                        <li className={s.chip}>CSS</li>
                        <li className={s.chip}>React</li>
                        <li className={s.chip}>MUI</li>
                        <li className={s.chip}>SASS</li>
                    </ul>
                    <div className={s.actionButtons}>
                        <a href="https://github.com/Wowaxur"
                           target="_blank"
                           rel="noreferrer">
                            Github
                        </a>
                        <> </>
                        <a href="https://offerheap.com/specialist/Wowaxur"
                           className={s.secondary}
                           target="_blank"
                           rel="noreferrer"
                        >
                            Offerheap
                        </a>
                    </div>
                </div>
            </article>

        </div>
    );
};

export default ProfileCard;