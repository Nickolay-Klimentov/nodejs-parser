import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import './LinkForm.scss';
import { newLink } from './linkFormSlice';

export default function LinkForm(): JSX.Element {
  const [url, setUrl] = useState('');

  const dispatch = useAppDispatch();

  const {
    linkFormState: { link },
  } = useSelector((store: RootState) => store);

  const createLink = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(newLink({ url }));
    setUrl('');
  };

  return (
    <>
      <div className="linkForm">
        <div className="linkForm__container">
          <div className="linkForm__item">
            <h4 className="linkForm__item-title">
              Форма получения файлов .js и .css
            </h4>
            <form onSubmit={createLink} method="post">
              <input
                id="url"
                name="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                type="text"
                placeholder="введите url"
                className="linkForm__item-input"
                required
              />
              <button type="submit" className="linkForm__item-btn">
                отправить
              </button>
            </form>
          </div>
          {link.scripts && link.styles && (
            <div className="linkForm__item">
              <ul>
                <h4 className="linkForm__item-title">Подключенные .js файлы</h4>
                {link.scripts?.map((script, ind) => (
                  <li key={ind}>{script}</li>
                ))}
              </ul>
              <ul>
                <h4 className="linkForm__item-title">
                  Подключенные .css файлы
                </h4>
                {link.styles?.map((style, ind) => (
                  <li key={ind}>{style}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
