import sbt.Keys.libraryDependencies

name := "backend"

version := "0.1"

scalaVersion := "2.13.1"

lazy val `root` = project
  .in(file("."))
  .aggregate(`backend`)

lazy val `backend` = project
  .in(file("./backend"))
  .settings(
    libraryDependencies += "com.typesafe.akka" %% "akka-http" % "10.1.11",
    libraryDependencies += "ch.megard" %% "akka-http-cors" % "0.4.2",
    libraryDependencies += "com.typesafe.akka" %% "akka-stream" % "2.6.4"
  )
