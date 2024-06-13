'use client';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { JSX, SVGProps } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import axios from "axios";

interface DropdownProps {
  postId: number;
}

export default function Dropdown({ postId }: DropdownProps) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = confirm("Tem certeza que deseja apagar sua vaga?");
    if (confirmed) {
      try {
        const response = await axios.delete(`/api/vaga?id=${postId}`);

        if (response.status !== 200) {
          throw new Error('Falha em apagar sua vaga');
        }

        alert('Vaga apagada com sucesso');
        router.refresh();
      } catch (error) {
        console.error('Error deleting post:', error);
        alert('Erro em apagar post');
      }
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link">
          <FaEllipsisV />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <button className="flex w-full" onClick={handleDelete}>
            <TrashIcon className="mr-2 h-4 w-4" />
            <p>Deletar</p>
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ShareIcon className="mr-2 h-4 w-4" />
          Compartilhar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function TrashIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

function ShareIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}
