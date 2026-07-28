import React, { useState } from 'react';
import styles from './LoginPage.module.css';

export function LoginPage({ onLogin, logoUrl }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await onLogin({ email, pass });
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className={styles.card}>
    //   {logoUrl && <img src={logoUrl} alt="Logo" className={styles.logo} />}
    //   <h2 className={styles.title}>Sign In</h2>
    //   {error && <p className={styles.error}>{error}</p>}

    //   <form onSubmit={handleSubmit} className={styles.form}>
    //     <input 
    //       type="email" 
    //       placeholder="Email address" 
    //       value={email} 
    //       onChange={(e) => setEmail(e.target.value)} 
    //       className={styles.input}
    //       required 
    //     />
    //     <input 
    //       type="password" 
    //       placeholder="Password" 
    //       value={pass} 
    //       onChange={(e) => setPass(e.target.value)} 
    //       className={styles.input}
    //       required 
    //     />
    //     <button type="submit" disabled={loading} className={styles.button}>
    //       {loading ? 'Signing in...' : 'Sign In'}
    //     </button>
    //   </form>
    // </div>

    <div className="login-container">

            <h2>Welcome Back</h2>
            <p className="login-subtitle">
                Sign in to access your insurance dashboard
            </p>

            <div className="login-form">
                <h2>Login</h2>
                
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />

                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading
                            ? "Logging in..."
                            : "Login"}
                    </button>
                </form>

                <p>
                    Don't have an account?{" "}
                    <Link to="/register">
                        Register
                    </Link>
                </p>
            </div>
            </div>

  );
}