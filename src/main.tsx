import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Remove any "Edit with Lovable" overlay/button that may be injected by browser extensions
function removeLovableButtons() {
	try {
		const all = Array.from(document.querySelectorAll<HTMLElement>("*"));
		const re = /edit with lovable|editar com o lovable|lovable/i;
		all.forEach((el) => {
			const txt = el.innerText || el.textContent || "";
			if (re.test(txt)) el.remove();
		});
	} catch (e) {
		// ignore errors
		// eslint-disable-next-line no-console
		console.debug("removeLovableButtons error", e);
	}
}

// Run once and after DOM changes
removeLovableButtons();
const observer = new MutationObserver(() => removeLovableButtons());
observer.observe(document.documentElement, { childList: true, subtree: true });

// Stop observing after a short while to avoid performance impact
setTimeout(() => observer.disconnect(), 10_000);

createRoot(document.getElementById("root")!).render(<App />);
