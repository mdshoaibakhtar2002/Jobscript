import { Sidebar, Menu, MenuItem} from "react-pro-sidebar";
import logo from "../img/logo.jpg"

export default function SideBar() {
  const { pathname } = location;
  const splitLocation = pathname.split("/app0/");
  let inlineStyle ={ background: "none" }
  function handleActiveEffect(){}
  return (
    <div style={{ position: "relative" }} className="sidebar">
      <Sidebar style={{ minWidth:"80px" }}>
        <Menu className="side-bar-height">
          <div  className="logo-wrapper"><img className="logo" src={logo} alt="icon" /></div>
            <>
              <MenuItem style={inlineStyle} className="black-white fill-white" id="overview" onClick={() => handleActiveEffect("overview")}><svg className="icon-size margin-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 96V224H256V96H384zm0 192V416H256V288H384zM192 224H64V96H192V224zM64 288H192V416H64V288zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg> Dashboard </MenuItem>
              <MenuItem style={inlineStyle} className={splitLocation[1] === "contacts" ? "active" : ""} id="contacts" onClick={() => handleActiveEffect("contacts")}><svg className="icon-size margin-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg> Fulltime Jobs </MenuItem>
              <MenuItem style={inlineStyle} className={splitLocation[1] === "events" ? "active" : ""} id="events" onClick={() => handleActiveEffect("events")}><svg className="icon-size margin-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z"/></svg> Internships </MenuItem>
              <MenuItem style={inlineStyle} className={splitLocation[1] === "batch" ? "active" : ""} id="batch" onClick={() => handleActiveEffect("batch")}><svg className="icon-size margin-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M96 0C78.3 0 64 14.3 64 32V224h96V192c0-35.3 28.7-64 64-64H448V32c0-17.7-14.3-32-32-32H96zM224 160c-17.7 0-32 14.3-32 32v32h96c35.3 0 64 28.7 64 64V416H544c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H224zm240 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM32 256c-17.7 0-32 14.3-32 32v13L155.1 415.9c1.4 1 3.1 1.6 4.9 1.6s3.5-.6 4.9-1.6L320 301V288c0-17.7-14.3-32-32-32H32zm288 84.8L184 441.6c-6.9 5.1-15.3 7.9-24 7.9s-17-2.8-24-7.9L0 340.8V480c0 17.7 14.3 32 32 32H288c17.7 0 32-14.3 32-32V340.8z"/></svg>Other Jobs</MenuItem>
              <MenuItem style={inlineStyle} className={splitLocation[1] === "easyapptemplate" ? "active" : ""} id="easyapp" onClick={() => handleActiveEffect("easyapp")}><svg className="icon-size margin-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"/></svg>Applied</MenuItem>
              <MenuItem style={inlineStyle} className={splitLocation[1] === "easyapptemplate" ? "active" : ""} id="easyapp" onClick={() => handleActiveEffect("easyapp")}><svg className="icon-size margin-right" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>Message</MenuItem>
            </>
        </Menu>
      </Sidebar>
    </div>
  )
}