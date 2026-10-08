import { useEffect, useRef } from "react";
import type { MouseEvent } from "react";
import type { Project } from "../data/projects";

interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project && !dialog.open) {
      dialog.showModal();
      dialog.scrollTop = 0;
    } else if (!project && dialog.open) {
      dialog.close();
    }
  }, [project]);

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>): void => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <dialog ref={dialogRef} aria-labelledby="dt" onClose={onClose} onClick={handleBackdropClick}>
      <div className="in">
        {project && (
          <>
            <button type="button" className="x" onClick={onClose}>
              Close
            </button>
            <small>{project.category}</small>
            <h3 id="dt">{project.title}</h3>
            <p>{project.summary}</p>
            <h4>The brief</h4>
            <p>{project.brief}</p>
            <h4>My approach</h4>
            <p>{project.approach}</p>
            <h4>Sample excerpt</h4>
            <blockquote>{project.excerpt}</blockquote>
            <h4>The result</h4>
            <p>{project.result}</p>
          </>
        )}
      </div>
    </dialog>
  );
}
