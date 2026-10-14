import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Mate Cserhati",
  description: "My portfolio projects showcase",
};

export default function Projects() {

  
  return (
    <div className="grid grid-cols-1 gap-30 justify-items-center mx-auto mt-5 p-8">
      <div className="w-full max-w-2xl">
        <h1 className="font-bold text-2xl">URL Shortener</h1>
        <div className="flex flex-col sm:flex-row sm:gap-5 font-mono mt-5">
          <a
            href="https://github.com/mtcsrht/urlshortener-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            frontend&#39;s repository
          </a>
          <a
            href="https://github.com/mtcsrht/UrlShortenerAPI"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            backend&#39;s repository
          </a>
        </div>
        <div className="mt-5">
          <h2 className="font-bold text-xl">Stack:</h2>
          <ul className="flex flex-col sm:flex-row justify-between">
            <li>
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Next.Js
              </a>
            </li>
            <li>
              <a
                href="https://expressjs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Express.Js
              </a>
            </li>
            <li>
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                MongoDB
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-5 font-sans text-justify">
          <p>
            A simple URL shortening application that tries to mimic how url shortener services might work.
          </p>
        </div>
      </div>

      <div className="w-full max-w-2xl">
        <h1 className="font-bold text-2xl">Forza Horizon 6 Telemetry</h1>
        <div className="flex flex-col sm:flex-row sm:gap-5 font-mono mt-5">
          <a
            href="https://github.com/mtcsrht/forza-horizon-6-telemetry"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            repository
          </a>
        </div>
        <div className="mt-5">
          <h2 className="font-bold text-xl">Stack:</h2>
          <ul className="flex flex-col sm:flex-row justify-between">
            <li>
              <a
                href="https://go.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Go
              </a>
            </li>
            <li>
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                React
              </a>
            </li>
            <li>
              <a
                href="https://recharts.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Recharts
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                WebSocket
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-5 font-sans text-justify">
          <p>
            A real-time telemetry dashboard for Forza Horizon and Forza Motorsport. A Go backend listens for the game&#39;s &quot;Data Out&quot; UDP packets, parses the binary payload and broadcasts it over WebSocket to every connected browser. The React frontend shows a live RPM gauge with redline, gear, throttle and brake inputs, power and torque, along with charts of the last 20 seconds. Finished sessions are saved and can be reviewed later or downloaded as JSON.
          </p>
        </div>
      </div>

      <div className="w-full max-w-2xl">
        <h1 className="font-bold text-2xl">Go Docker</h1>
        <div className="flex flex-col sm:flex-row sm:gap-5 font-mono mt-5">
          <a
            href="https://github.com/mtcsrht/go-docker"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            repository
          </a>
        </div>
        <div className="mt-5">
          <h2 className="font-bold text-xl">Stack:</h2>
          <ul className="flex flex-col sm:flex-row justify-between">
            <li>
              <a
                href="https://go.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Go
              </a>
            </li>
            <li>
              <a
                href="https://docs.docker.com/reference/api/engine/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Docker Engine API
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                WebSocket
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-5 font-sans text-justify">
          <p>
            A container management service written in Go on top of the Docker Engine API. Its REST API creates, lists, starts, stops and removes containers, pulling images and provisioning volumes automatically. Ready-made templates spin up game servers such as Minecraft in small, medium or large sizes. Container logs, an interactive shell and the server console are streamed to the browser over WebSocket.
          </p>
        </div>
      </div>

      <div className="w-full max-w-2xl">
        <h1 className="font-bold text-2xl">HTTP Server</h1>
        <div className="flex flex-col sm:flex-row sm:gap-5 font-mono mt-5">
          <a
            href="https://github.com/mtcsrht/http-server"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            repository
          </a>
        </div>
        <div className="mt-5">
          <h2 className="font-bold text-xl">Stack:</h2>
          <ul className="flex flex-col sm:flex-row justify-between">
            <li>
              <a
                href="https://www.rust-lang.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Rust
              </a>
            </li>
            <li>
              <a
                href="https://doc.rust-lang.org/std/net/struct.TcpListener.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                std::net
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-5 font-sans text-justify">
          <p>
            An HTTP server built from scratch in Rust using only the standard library, with no external crates. It accepts raw TCP connections, parses the request line, headers and body into structured requests, and builds responses with status lines and headers. A learning project for understanding how HTTP works under the hood.
          </p>
        </div>
      </div>
    </div>
  );
}
