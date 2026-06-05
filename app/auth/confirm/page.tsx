'use client';

//?error=access_denied&error_code=otp_expired&error_description=Email+link+is+invalid+or+has+expired#error=access_denied&error_code=otp_expired&error_description=Email+link+is+invalid+or+has+expired&sb=
type ConfirmProps = {
    searchParams: {
        error?: string;
        error_description?: string;
    }
}

export default function Confirm( props: ConfirmProps ) {
    const message = props.searchParams.error_description ?? "Your email has been confirmed! You can now return to the app and sign in.";
   
    return (
        <div className="min-h-screen bg-linear-to-br from-[#02050b] via-[#050c1d] to-[#071426] text-slate-100 flex items-center justify-center">
            <div className="rounded-4xl border border-emerald-500/30 bg-linear-to-br from-[#05130d] via-[#04100c] to-[#0c2a21] p-8 text-slate-100 shadow-[0_35px_90px_rgba(2,6,23,0.65)]">
                <p className="text-lg">{message}</p>
            </div>
        </div>
    );
}
