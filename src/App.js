import Aside from "./components/Aside";
import Input from "./components/Input";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

const phoneIco = <FontAwesomeIcon icon={faPhoneAlt} />
const lockIco = <FontAwesomeIcon icon={faLock} />

function App() {
  return (
    <div className="web-content">
      <Aside />
      <div className="main-content">
        <header className="header">
          <h3 className="header__title">Inputs</h3>
        </header>
        <section className="buttons-content">
          <div className="row">
            <div className="card">
              <Input />
              <p className="card__info fourth">&lt;Input /&gt;</p>
            </div>
            <div className="card">
              <input
                placeholder="Placeholder"
                className="md default-width fixed-hover"
                type="text"
                name="inp"
              />
              <label className="card__label" htmlFor="inp">
                Label
              </label>
              <p className="card__info grey">&amp;:hover</p>
            </div>
            <div className="card">
              <input
                placeholder="Placeholder"
                className="md default-width fixed-focus"
                type="text"
                name="inp"
              />
              <label className="card__label" htmlFor="inp">
                Label
              </label>
              <p className="card__info grey">&amp;:focus</p>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <Input error />
              <p className="card__info fourth">&lt;Input error/&gt;</p>
            </div>
            <div className="card">
              <input
                placeholder="Placeholder"
                className="md default-width fixed-hover"
                type="text"
                name="inp"
              />
              <label className="card__label" htmlFor="inp">
                Label
              </label>
              <p className="card__info grey">&amp;:hover</p>
            </div>
            <div className="card">
              <input
                placeholder="Placeholder"
                className="md default-width fixed-focus-error"
                type="text"
                name="inp"
              />
              <label className="card__label error-text" htmlFor="inp">
                Label
              </label>
              <p className="card__info grey">&amp;:focus</p>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <Input disabled />
              <p className="card__info fourth">&lt;Input disabled/&gt;</p>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <Input helperText="Some interesting text" />
              <p className="card__info fourth">
                &lt;Input helperText=”Some interesting text” /&gt;
              </p>
            </div>
            <div className="card">
              <Input helperText="Some interesting text" error/>
              <p className="card__info fourth">
                &lt;Input helperText=”Some interesting text” error /&gt;
              </p>
            </div>
          </div>
          <div className="row">
            <div className="card">
            <Input startIcon={phoneIco} />
              <p className="card__info fourth">&lt;Input startIcon/&gt;</p>
            </div>
            <div className="card">
            <Input endIcon={lockIco} />
              <p className="card__info fourth">&lt;Input endIcon/&gt;</p>
            </div>
          </div>
          <div className="row">
            <div className="card">
            <Input value="text" />
              <p className="card__info fourth">&lt;Input value="text" /&gt;</p>
            </div>
          </div>
          <div className="row">
            <div className="card">
            <Input size="sm"/>
              <p className="card__info fourth">&lt;Input size="sm"/&gt;</p>
            </div>
            <div className="card">
            <Input size="md"/>
              <p className="card__info fourth">&lt;Input size="md"/&gt;</p>
            </div>
          </div>
          <div className="row">
            <div className="card full-width">
            <Input fullWidth />
              <p className="card__info fourth">&lt;Input fullWIdth/&gt;</p>
            </div>
          </div>
          <div className="row auto-height">
            <div className="card">
            <Input multiline row="4" />
              <p className="card__info fourth">&lt;Input multiline row="4"/&gt;</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
