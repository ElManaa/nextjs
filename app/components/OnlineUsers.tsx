import User from "@/app/components/User";
import { useEffect, useRef, useState } from "react";
import styles from "@/styles/components/OnlineUsers.module.scss";
import axiosInstance from "@/pages/api/axios";

const OnlineUsers: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [users, setUsers] = useState<any[]>([]);

  // Drag Effect
  useEffect(() => {
    let isMounted = true;

    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
    }
    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = (e: MouseEvent) => {
      if (containerRef.current) {
        containerRef.current.style.cursor = "grabbing";
        containerRef.current.style.userSelect = "none";

        pos = {
          left: containerRef.current.scrollLeft,
          top: containerRef.current.scrollTop,
          x: e.clientX,
          y: e.clientY,
        };
        containerRef.current.addEventListener("mousemove", mouseMoveHandler);
        containerRef.current.addEventListener("mouseup", mouseUpHandler);
      }
    };

    const mouseUpHandler = function () {
      containerRef.current?.removeEventListener("mousemove", mouseMoveHandler);
      containerRef.current?.removeEventListener("mouseup", mouseUpHandler);
      if (containerRef.current) {
        containerRef.current.style.cursor = "grab";
        containerRef.current.style.removeProperty("user-select");
      }
    };

    const mouseMoveHandler = function (e: MouseEvent) {
      // How far the mouse has been moved
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      // Scroll the element
      if (containerRef.current) {
        containerRef.current.scrollTop = pos.top - dy;
        containerRef.current.scrollLeft = pos.left - dx;
      }
    };

    if (containerRef.current) {
      isMounted &&
        containerRef.current.addEventListener("mousedown", mouseDownHandler);
    }

    return () => {
      isMounted = false;
      containerRef.current &&
        containerRef.current.removeEventListener("mousedown", mouseDownHandler);
    };
  }, []);

  useEffect(() => {}, []);

  useEffect(() => {
    axiosInstance
      .get(`/user/api/online`)
      .then((d) => {
        d.data = d.data.data;
        setUsers(d.data);
      })
      .catch((err) => {
        console.error(err);
      });
    const interval = setInterval(() => {
      axiosInstance
        .get(`/user/api/online`)
        .then((d) => {
          d.data = d.data.data;
          setUsers(d.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className="row">
        <div className="d-flex col">
          {users.map((u, i) => (
            <User
              key={i}
              position="bottom"
              classes="me-3"
              userData={u}
              mauto={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineUsers;
