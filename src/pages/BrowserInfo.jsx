import { useEffect, useState } from "react";
import { getBrowserInfo } from "../services/apiCagent";

function BrowserInfo() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    getBrowserInfo().then(data => setInfo(data));
  }, []);

  if (!info) {
    return <p>Carregando informações do navegador...</p>;
  }

  return (
    <div className="card">
      <h2>Informações do Navegador</h2>

      <p><b>Browser Family:</b> {info.browser_family}</p>
      <p><b>Version:</b> {info.version}</p>
      <p><b>Brand:</b> {info.brand}</p>
      <p><b>Type:</b> {info.type}</p>
      <p><b>OS Family:</b> {info.os_family}</p>
    </div>
  );
}

export default BrowserInfo;
