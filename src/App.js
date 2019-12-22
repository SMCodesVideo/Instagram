import React from 'react';
import './App.css';
import iphone_black from './iphone_black.png';
import background from './background.jpg';
import logo from './logo.png';
import face from './facebook.svg';

function App() {
	return (
		<div className="tela">
			<div id="center">
				<div id="cells">
					<div className="cellBack">
						<img
							src={background}
							alt="Background example"
							title="Background example"
						/>
					</div>
					<div className="cellFront">
						<img
							src={background}
							alt="Background example"
							title="Background example"
						/>
					</div>
				</div>
				<div id="login">
					<img
						src={logo}
					/>
					<form method="POST" id="formularioLogin" autocomplete="off">
						<input
							type="text"
							placeholder="Phone number, username, or email"
							title="Phone number, username, or email"
							name="login"
						/>
						<input
							type="password"
							placeholder="Password"
							title="Password"
							name="password"
						/>
						<input
							type="submit"
							name="botton"
							value="Log in"
							title="Log in"
							id="logar"
						/>
					</form>
					<div>
						<div id="insert">
							<div className="barra_left"></div>
							<p>OR</p>
							<div className="barra_right"></div>
						</div>
						<div id="logfacebook">
							<img
								src={face}
								alt="Logo facebook"
								title="Logo facebook"
							/>
							<p>
								Log in with Facebook
							</p>
						</div>
						<br/>
						<a href="#" id="forgot">
							Forgot password?
						</a>
					</div>
				</div>
				<div id="donthave">
					<p>
						Don't have an account? <strong>Sign up</strong>
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
